<h2> 🔥 Web card </h2>

Web card is really basic website (portfolio card) where you can substitute your data in data.js file and thanks for it you can create your own business card.

### :eyes: Technologies

Languages and frameworks:

- Java Script
- HTML 5
- React.js
- React Bootstrap 4.5 v1.3.0
- Atomic Design Structure

### :see_no_evil: Code

- Create small components (atoms) which can be reusable and expanded for new features. In the tree you can find the Components folder in which there are Athoms, Molecules and View folders thanks for it the structure of my project is really easy. 

```javascript
<WebButton
content={<IoMdClose className="galleryModal__icon__close" />}
btnFunction={handleGalleryModalClose}
className={'closeModalButton'}
/>
}
```

- Use axios for asynchronous actions

```javascript
const getPhotoData = () => {
axios
.get('https://picsum.photos/v2/list?limit=10')
.then((res) => {
return setPhotos([...res.data]);
})
.catch((error) => console.log(error));
}}
```

- Use react-hook

````javascript
useEffect(() => {
getPhotoData();
}, []);```
````
### 💻 Installation
To run this project, install it locally using :

```
$ cd ../lorem
$ npm install
$ npm start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
### :couple: Contribute

If you want add or change something feel free to create the issues and discuss about it with me

### :ear: Contact
All information about me you can find on my home page in github 
