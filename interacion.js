var box = document.getElementsByClassName('animated_boxes');
var buttons = document.getElementsByClassName('buttons_top');

//function for calling animated boxes
function parodymas(eve)
{

//button for calling first animated box
//and the same time disableing other buttons
    if(eve.id == "first_button") 
    {
        box[0].classList.add('animation');
        for(var a = 1; a < buttons.length; a++)
        {
            buttons[a].setAttribute('disabled', 'disabled');
        }
    }
//button for calling second animated box
//and the same time disableing other buttons
    else if(eve.id == "second_button")
    {
        box[1].classList.add('animation2');
        for(var b = 0; b < buttons.length; b++)
        {
            if(buttons[b] == 1)
            {
                continue;
            }
            buttons[b].setAttribute('disabled', 'disabled');

        }
    }
//button for calling third animated box
//and the same time disableing other buttons
    else if(eve.id == "third_button")
    {
        box[2].classList.add('animation3');
        for(var c = 0; c < buttons.length; c++)
        {
            if(buttons[c] == 2)
            {
                continue;
            }
            buttons[c].setAttribute('disabled', 'disabled');
        }

    }
//button for calling fourth animated box
//and the same time disableing other buttons
    else if(eve.id == "fourth_button")
    {
        box[3].classList.add('show_block');
        for(var d = 0; d < buttons.length; d++)
        {
        if(buttons[d] == 3)
        {
            continue;
        }
        buttons[d].setAttribute('disabled', 'disabled');
        }
    }
//button for calling fifth animated box
//and the same time disableing other buttons
    else if(eve.id == "fifth_button")
    {
        box[4].classList.add('animation5');
        for(var e = 0; e < buttons.length; e++)
        {
            if(buttons[e] == 4)
            {
                continue;
            }
            buttons[e].setAttribute('disabled', 'disabled');
        }
    }
//button for calling sixth animated box
//and the same time disableing other buttons
    else if(eve.id == "sixth_button")
    {
            box[5].classList.add('animation6');
            for(var f = 0; f < buttons.length; f++)
        {
                if(buttons[f] == 5)
                {
                    continue;
                }
                buttons[f].setAttribute('disabled', 'disabled');
        }
    }
//button for calling seventh animated box
//and the same time disableing other buttons
    else if(eve.id == "seventh_button")
    {
        box[6].classList.add('animation7');
        for(var g = 0; g < buttons.length; g++)
        {
            if(buttons[g] == 6)
            {
                continue;
            }
            buttons[g].setAttribute('disabled', 'disabled');
        }
    }
};



//function for removing animated boxes 
//and at the same time to activate the buttons
function naikinimas(that)
{
    //finding and closing first animation
    if(that.id == "hide1")
    {
        box[0].classList.remove('animation');
        for(var a = 1; a < buttons.length; a++)
        {
            buttons[a].removeAttribute('disabled', 'disabled');
        }

    } 
    //finding and closing second animation
    else if(that.id == "hide2")
    {
        box[1].classList.remove('animation2');
        for(var b = 0; b < buttons.length; b++)
        {
            buttons[b].removeAttribute('disabled', 'disabled');
        }
    }
    //finding and closing third animation
    else if(that.id == "hide3")
    {
        box[2].classList.remove('animation3');
        for(var c = 0; c < buttons.length; c++)
        {
            buttons[c].removeAttribute('disabled', 'disabled');
        }
    }
    //finding and closing fourth animation
    else if(that.id == "hide4")
    {
        box[3].classList.add('animation4');
        box[3].addEventListener("webkitAnimationEnd", end_animation);
    }
    //finding and closing fifth animation
    else if(that.id == "hide5")
    {
        box[4].classList.remove('animation5');
        for(var e = 0; e < buttons.length; e++)
        {
            buttons[e].removeAttribute('disabled', 'disabled');
        }
    }
    //finding and closing sixth animation
    else if(that.id == "hide6")
    {
        box[5].classList.remove('animation6');
        for(var f = 0; f < buttons.length; f++)
        {
            buttons[f].removeAttribute('disabled', 'disabled');
        }
    }
    else if(that.id == "hide7")
    {
        box[6].classList.remove('animation7');
        for(var g = 0; g < buttons.length; g++)
        {
            buttons[g].removeAttribute('disabled', 'disabled');
        }
    }
}; 


//function for activate animation after closing div
function end_animation() {
this.setAttribute('class', 'animated_boxes');
for(var a = 0; a < buttons.length; a++)
{
    buttons[a].removeAttribute('disabled', 'disabled');
}
};