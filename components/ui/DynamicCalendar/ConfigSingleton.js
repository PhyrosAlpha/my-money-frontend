class ConfigSingleton {

    static instance = null;

    styles = {};
    icons = {};
    callbacks = {};
    months = {};

    static getInstance() {
        if(ConfigSingleton.instance == null){
            ConfigSingleton.instance = new ConfigSingleton();
        }
        return ConfigSingleton.instance;
    }

    getStyles(){
        return this.styles;
    }

    setStyles(styles){
        this.styles = {...styles};
    }

    getIcons(){
        return this.icons;
    }

    setIcons(icons){
        this.icons = {...icons};
    }

    getCallbacks(){
        return this.callbacks;
    }

    setCallbacks(callbacks){
        this.callbacks = {...callbacks};
    }

}

export default ConfigSingleton;