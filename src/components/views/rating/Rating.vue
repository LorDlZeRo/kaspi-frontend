    <script>
        export default {
            props: {
                size: {
                    type: String,
                    default: 'medium' 
                },
            },
            setup (props) {

                const size = props.size
                    
                
                return {
                    size
                }
            }
        }
    </script>

    <template>
        <div :class="`item-card-rating-`+ size">
                <font-awesome-icon :class="`icon-star-`+ size" icon="star" />
                <font-awesome-icon :class="`icon-star-`+ size" icon="star" />
                <font-awesome-icon :class="`icon-star-`+ size" icon="star" />
                <font-awesome-icon :class="`icon-star-`+ size" icon="star" />
                <font-awesome-icon :class="`icon-star-`+ size" icon="star" />
                <a :class="`info-text-name-`+ size"> (27851 отзывов) </a>
        </div>
    </template>

    <style lang="scss" scoped>
       $common-styles: (
            width: 100%,
            icon-star-color: rgb(217, 60, 60),
            info-text-name-color: #0089d0,
            info-text-name-height: 34px,
        );
        

     .item-card-rating-medium {
        width: map-get($common-styles, width);
    }

    .icon-star-medium {
        width: 16px;
        color: map-get($common-styles, icon-star-color);
    }

    .info-text-name-medium {
        color: map-get($common-styles, info-text-name-color);
        height: map-get($common-styles, info-text-name-height);

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .item-card-rating-small {
        width: map-get($common-styles, width);
    }

    .icon-star-small {
        width: 11px;
        color: map-get($common-styles, icon-star-color);
    }

    .info-text-name-small {
        color: map-get($common-styles, info-text-name-color);
        height: map-get($common-styles, info-text-name-height);

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    
    </style>