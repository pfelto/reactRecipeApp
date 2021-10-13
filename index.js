import React from 'react'
import { render } from 'react-dom'
import Menu from './menu'
import Data from './data'


window.React = React;

render(
    <Menu title='Delicious Recipes' recipes={Data} />,
    document.getElementById('jsxreact_container')
)