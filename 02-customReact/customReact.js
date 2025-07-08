function customRender (reactElement, container ){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
};


const reactElement = {
    type: 'p',
    props: {
        para: "_blank"
    },
    children: 'This is my custom react'
};


const mainContainer = document.querySelector('#root'); 
customRender(reactElement, mainContainer) //Like react have .render function
