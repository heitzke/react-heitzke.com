

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/mike.heitzke/Documents/projects/heitzke.com/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/404.js'
      
const t_1 = universal(import('/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/about.js'), universalOptions)
      t_1.template = '/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/about.js'
      
const t_2 = universal(import('/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/blog.js'), universalOptions)
      t_2.template = '/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/blog.js'
      
const t_3 = universal(import('/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/index.js'), universalOptions)
      t_3.template = '/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/index.js'
      
const t_4 = universal(import('/Users/mike.heitzke/Documents/projects/heitzke.com/src/containers/Post'), universalOptions)
      t_4.template = '/Users/mike.heitzke/Documents/projects/heitzke.com/src/containers/Post'
      

// Template Map
export default {
  '/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/404.js': t_0,
'/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/about.js': t_1,
'/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/blog.js': t_2,
'/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/index.js': t_3,
'/Users/mike.heitzke/Documents/projects/heitzke.com/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "/Users/mike.heitzke/Documents/projects/heitzke.com/src/pages/404.js"

