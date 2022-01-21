//info("DEBUG: Custom Title Screen loaded!")

mainMenu {
    enabled = true

    splashText {
        enabled = true 
        splashesEnabled = false
    }

    background {
        clearBackgrounds()
        backgroundStayLength = 50000 // 50 seconds
        backgroundFadeLength = 2000 // 2 seconds fade
        renderGradientShade = true
        image { 
            texture = file("config/slightguimodifications/background.png") 
        }
    }

    removeMinecraftLogo()
    removeEditionBadge()
    clearAllButtons()

    label {
        position {
            x = 2
            y { it - 10 }
        }

        text = literal("Hypothermia - v0.0.0-ALPHA")
        shadow = true
    }

    button {
        position {
            x { it / 2 - 100 }
            y = 131
        }
        width = 204
        height = 20

        text = translatable("menu.singleplayer")
        onClicked = singleplayer()
    }
    button {
        position {
            x { it / 2 - 100 }
            y = 155
        }
        width = 204
        height = 20

        text = translatable("menu.multiplayer")
        onClicked = multiplayer()
    }

    button {
        position {
            x { it / 2 - 100 }
            y = 179
        }
        width = 204
        height = 20

        text = translatable("modmenu.title")
        onClicked = modMenu()
    }
   button {
        position {
            x { it / 2 - 101 }
            y = 215
        }
        width = 100
        height = 20

        text = translatable("menu.options")
        onClicked = options()
    }
   button {
        position {
            x { it / 2 + 3 }
            y = 215
        }
        width = 100
        height = 20

        text = translatable("menu.quit")
        onClicked = exit()
    }
    button {
        position {
            x { it / 2 - 125 }
            y = 215
        }
        width = 20
        height = 20

        texture = file("config/slightguimodifications/discord_button.png") 
        hoveredTexture = file("config/slightguimodifications/discord_button_hovered.png")

        onClicked = url("https://discord.com/invite/G4PjhEf")
    }



   button {
        position {
            x { it / 2 + 107 }
            y = 215
        }
        width = 40
        height = 20

        text = literal("Reload")
        onClicked = reloadCts()
    }
}