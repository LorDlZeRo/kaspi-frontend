<script>
    export default {
        props: {
            orientation: {
                type: String,
                default: 'horizontal'
            },
            size: {
                type: Number,
                default: 1
            }
        },

        setup(props) {

            const orientation = props.orientation

            return {
                orientation
            }
        }
    }
</script>

<template>

      <div 
        :class="orientation"
      >
      </div>


  </template>
  
  <style lang="scss" scoped>
  .horizontal {
    border-top: 1px solid #e5e5e5;
    width: 100%;
  }
  
  .vertical {

    width: 1px;
    height: 100%;
    background-color: #e5e5e5;

  }
  </style>
  