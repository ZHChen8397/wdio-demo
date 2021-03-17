class MainPage{
    public get pageHeader() { 
        return $('h1.heading')
    }

    public get subHeading() { 
        return $('h2')
    }

    public get parent() { 
        return $('ul')
    }

    public get childElement() { 
        return $$('li')
    }

    public specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`)}

    public getLiText(){
        this.childElement.filter((element) =>{
            console.log(element.getText())
        })
    }

    public getSpecificElementText(index){
        this.specificChildElement(index).getText()
    }

    public open(path){
        browser.url(path)
    }

    
}

export default  new MainPage();