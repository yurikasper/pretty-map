const variableMap = [
    ['#route-color', 'value', 'route-color'],
    ['#contrast', 'value', 'map-contrast'],
    ['#invert-switch', 'checked', 'map-invert']
];

//map CSS variables to input fields
export default function mapVariables() {
    variableMap.forEach(mapping => {
        document.querySelectorAll(mapping[0]).forEach(mappedElement => {
            mappedElement.addEventListener('input', () => {
                //get field content
                let value = mappedElement[mapping[1]];
                //boolean to number
                if(value === true) {
                    value = 1;
                }
                if(value === false) {
                    value = 0;
                }
                //set css variable
                document.querySelector(':root').style.setProperty(`--${mapping[2]}`, value);
            });
        });
    });
}