// password generator takes in desired length and if you want special characters (0=False/1=True)
function passGen(len, specialChars) 
{
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersAndSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

    if (specialChars != 0) 
    {
        for (var i = 0; i < len; i++) 
        {
            password += charactersAndSpecial.charAt(Math.floor(Math.random() * charactersAndSpecial.length));
        }
    }
    else 
    {
        for (var i = 0; i < len; i++) 
        {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }

    console.log(`Here is your password: ${password}`);
}

len = 15;
passGen(len, 0);
passGen(len, 1);