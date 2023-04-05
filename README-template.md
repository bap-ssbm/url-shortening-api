# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

https://prnt.sc/NUlR2Y0Kksqt



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- tailwindCSS
- ReactJS
- Framer-Motion
- Mobile-first workflow
- shrtcode API
- Axios


### What I learned

I learned alot from this project. I learned that using tailwind for animations rather than framer-motion in some situations is better and easier to use.
i learned that there is a function that can let user copy a variable by clicking on a button.
learned a bit more how to do axios, this time, i manually wrote the code of getting the api myself. Getting better at making clean framer-motion animations. and also tailwind CSS. its becoming a bit more second nature to me.
Although sometimes i have to look at the documentation.

Oh yeah, this is one of my first times using mobile-first workflow, it actually worked better for me, i didnt have to worry about anything breaking in the mobile view, since I created it that way first

```html
 <div className="flex flex-col space-y-20 text-violet-1100 tracking-tight md:flex-row md:space-y-0 md:space-x-16">
            <ul className="space-y-3">
                <li className="font-bold text-white mb-6">Features</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Link Shortening</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Branded Links</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Analytics</li>
            </ul>
            <ul className="space-y-3">
                <li className="font-bold text-white mb-6 ">Resources</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Blog</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Developers</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >
            Support</li>
            </ul>
            <ul className="space-y-3">
                <li className="font-bold text-white mb-6 ">Company</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >About</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Our Team</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Careers</li>
                <li className="cursor-pointer hover:text-cyan-1000 transition duration-300 ease-in-out" >Contact</li>
            </ul>
            
        </div>
```
I've never really considered using lists much for navs, footers and stuff, but i feel like tailwind has openned up that door for me since, it makes it so that i dont have to worry about removing the way it is normally, before adding my own styles on to it.
```css
#shorten-input-box{
    background-image: url("./images/bg-shorten-mobile.svg");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: top;
}

#call-to-action{
    background-image: url("./images/bg-boost-mobile.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

@media (min-width:768px) {
    #shorten-input-box{
        background-image: url("./images/bg-shorten-desktop.svg");
        background-size: cover;
    }
    
    #call-to-action{
        background-image: url("./images/bg-boost-desktop.svg");
        
    }
}

```

I feel like i was able to finally be able to use background-image the way i want and the way it loojks on the preview of how the website people want it.
```js
  let translate = order === 1 && "md:translate-y-[-40px]";
    order === 3 && (translate = "md:translate-y-[40px]");


```
im proud of this order variable i made for the cards in the bottom section. It allowed me to manipulate them the way i wanted with translate, as well as framer motion animations later on.

### Continued development

Using API's is fun, and this project made me appreciate them a bit more.
Also, since this was my first mobile first project, I feel like I have a bit more to learn, but I feel like this way is pretty nice, and gives me much more flexibilityt than I initially thought.

