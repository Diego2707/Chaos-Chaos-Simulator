class Menu
{
    constructor()
    {
        this.menus = []
        this.currentMenu = {};
        this.selectedOption = 0;
        this.keypressCooldown = 0;
    }

    render() //temp code, will replace once layout is made
    {
        textCtx.font = "bold 30px Pixel";
        for(var i = 0; i < this.currentMenu.Options.length; i++)
        {
            if(i == this.selectedOption)
                textCtx.fillStyle = "Red";
            else
                textCtx.fillStyle = "White";
            textCtx.fillText(this.currentMenu.Options[i].Text, 50, 50 + (40 * i));
        }
    }

    update()
    {
        if(keys.UP || keys.DOWN)
            this.keypressCooldown++;
        else
            this.keypressCooldown = 0;
        if(this.keypressCooldown == 1 || (this.keypressCooldown > 15 && this.keypressCooldown % 5 == 0))
        {
            if(keys.UP)
                this.selectedOption--;
            else if(keys.DOWN)
                this.selectedOption++;
            this.selectedOption = Math.abs(this.selectedOption) % this.currentMenu.Options.length;
        }
        if(this.currentMenu.Options[this.selectedOption].Dest != null && keys.Z)
            this.setMenu(this.currentMenu.Options[this.selectedOption].Dest);
        if(this.currentMenu.Exit != null && keys.X)
            this.setMenu(this.currentMenu.Exit.Name, this.currentMenu.Exit.Select);
    }

    addMenu(name, options, exit = null)
    {
        this.menus.push({Name: name, Options: options, Exit: exit});
    }

    setMenu(name, select = 0)
    {
        for(var i = 0; i < this.menus.length; i++)
        {
            if(this.menus[i].Name == name)
                this.currentMenu = this.menus[i];
        }
        this.selectedOption = select;
    }
}