function customRender(reactElement, container){
    const domElement = document.createElement('a');
    domElement.innerHTML = reactElement.Children;

    for(const prop in domElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
}

const reactElement = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

let root = document.getElementById('root');

customRender(reactElement, root);