// password generator takes in desired length and if you want special characters (0=False/1=True)
function passGen(len, specialChars) 
{
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersAndSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

    if (specialChars) 
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

    return password;
}

function basicEncrypt(password, key)
{
   let encryptedPassword = '';
   for (let i = 0; i < password.length; i++) 
   {
       let asciiNum = password.charCodeAt(i) + key;
       encryptedPassword += String.fromCharCode(asciiNum);
   }
   return encryptedPassword;
}

function basicDecrypt(password, key)
{
    let decryptedPassword = '';
    for (let i = 0; i < password.length; i++) 
    {
        let asciiNum = password.charCodeAt(i) - key;
        decryptedPassword += String.fromCharCode(asciiNum);
    }
    return decryptedPassword;
}

const LEN = 8;

password1 = passGen(LEN, false);
encryptedPassword1 = basicEncrypt(password1, 5);
password2 = passGen(LEN, true);
encryptedPassword2 = basicEncrypt(password2, 5);

console.log(`Here is your password without special characters: ${password1}`);
console.log(`Here is your password with special characters: ${password2}`);

console.log(`Here is your encrypted password without special characters: ${encryptedPassword1}`);
console.log(`Here is your encrypted password with special characters: ${encryptedPassword2}`);

console.log(`Here is the decrypted password without special characters: ${basicDecrypt(encryptedPassword1, 5)}`);
console.log(`Here is the decrypted password with special characters: ${basicDecrypt(encryptedPassword2, 5)}`);