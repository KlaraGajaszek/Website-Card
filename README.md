<h2> 🔥 Web card </h2>

Web card is really basic website (portfolio card) where you can substitute your data in data.js file and thanks for it you can create your own business card. What is more the application is full responsive. 

###  Description
The application has homepage and modal. On the homepage there are box with main text. The box can be expanded when the More button is click so thanks for it of first sight the person can see the most important informations and them the box can be expanded so now there are more information. When the Show Gallery button is clicked the modal with photos is open. In the modal there are 10 photos from external api but feel free to change it for your photos and then you can create amazing business card. 
### :eyes: Technologies

Languages and frameworks:

- Java Script
- HTML 5
- React.js
- React Bootstrap 4.5 v1.3.0
- Atomic Design Structure

### :see_no_evil: Code

- In the tree there is Components folder in which there are Atoms, Molecules and View folders thanks for it the structure of project is really easy. Create small components (atoms) which can be reusable and expanded for new features and them create huge components with atoms and molecules.

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
All information about me you can find on my home page on the github 
