        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
        import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyBU0sULZYB6-mZdPwFsWw-teB5STW0xBoc",
            authDomain: "bookstore-44df6.firebaseapp.com",
            databaseURL: "https://bookstore-44df6-default-rtdb.firebaseio.com",
            projectId: "bookstore-44df6",
            storageBucket: "bookstore-44df6.appspot.com",
            messagingSenderId: "520272877168",
            appId: "1:520272877168:web:0245c151c6b0c41c62c6b5",
            measurementId: "G-WKRXPCNFEL"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const db = getDatabase();


        const name = document.querySelector('#name')
        const email = document.querySelector('#email')       
        const adress = document.querySelector('#adress')
        const phone = document.querySelector('#phone')
        const text = document.querySelector('#text')
        const sendBtn = document.querySelector('#sendBtn')
        //---------------------------------------------------
        function generate_uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            function(c) {
                const uuid = Math.random() * 16 | 0;
                const v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        function SetData() {
            const id=generate_uuidv4()
            set(ref(db, 'ContactUs/' + id),{
                Name: name.value,
                Email: email.value,
                Adress: adress.value,
                Phone : phone.value,
                Text : text.value
            })
            .then(console.log('data-push'))
            .catch(err =>(alert(err)))
        }
        sendBtn.addEventListener('click', SetData)


        //----------------------------------------------------