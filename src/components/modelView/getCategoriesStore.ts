import { defineStore } from "pinia";
import axios from 'axios'
import { Category,   // interface
         deepCloneData, 
         getMainCategories,

        } from './helpers/categoriesHelper'
        
const useCategoriesStore = defineStore('categories', {
    state: ()=> ({
            mainCategories: [] as Category [],
            nestedCategories: [] as Category [],
            clonedCategories: [] as Category [],
            childCategories: [] as Category [],
            secondChildCategories: [] as Category [],
            nameChildCategories: {} as Category,
            initialState: false,
    }),



    actions: {
            getCategoris: async function(): Promise<void> {
                try {
                    const response = await axios.get('https://netlifylordlzerotest.netlify.app/.netlify/functions/api/'); 
                    await this.processData(response.data);

                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },
            
            
            processData: async function (data: Array<Category>): Promise<void> {
                const clonedCategories = await deepCloneData(data);    
                this.clonedCategories = await deepCloneData(data);
                this.mainCategories = getMainCategories(data);
                this.nestedCategories = await clonedCategories;
                
            },

            getChildCategoriesByParentId: (categories: Array<Category>, id:string) => 
                                        categories.filter(element => element.parent_id === id),
                                        
            showNestedMenuHandler: function (event: MouseEvent) {
           
                const id = (event.currentTarget as HTMLElement)?.id 

                const foundCategory = this.mainCategories.find(elem => elem._id === id);
                if (foundCategory !== undefined) {
                    this.nameChildCategories = foundCategory
                    this.childCategories =  this.getChildCategoriesByParentId(this.nestedCategories, id);
 
                } else {
                    console.log('foundCategory является undefined и поэтому это ошибка');
                }
            },
            openMenu: function() { this.initialState = true },
            closeMenu: function(){ this.initialState = false }
        },
    
    })

export default useCategoriesStore