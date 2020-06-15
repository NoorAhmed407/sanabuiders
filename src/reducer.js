import BIMG from './img/sectionimg.jpg';
 
 const iState = {
     bodyData: {
        para: [
            "Since inception back in 1990, the idea is to strive to raise the standard of construction industry. The Brains behind the SANA BUILDERS & DEVELOPERS streamline a strong dedication and Professionalism of High Standard in their work and site environment.",
            "Member of ABAD (Association of Builders & Developers) under the title of “Mehtab Builders & Developers” and “Sana Corporation”.",
            "Licensed by B.C.A. (Sindh Building Control Authority) under the Title of “Mehtab Builders & Developers”",
            "Under the Title of M. R. Group of Companies, Four Sub-Companies (Sana Enterprises, Sana Corporation, Sana & Co., and Sana Associates) have been registered in B.R.",
            "We put main emphasis on immaculate planning for every project and offers practical and preferred ideas in housing. People at Sana Builders believes in creativity and innovation. Comprising a team of highly qualified, experienced and dedicated professionals, our experts continuously strive for building and development of the housing demands of maximum number of people."
            ],
        Img: BIMG
    },
    ourTeamData:{
        textData: [
                    {
                        id: 1,
                        name: "Sarfaraz Ahmed",
                        desc: "Sarfaraz Ahmed is the CEO and Board of Director of Sana Builders and Developers. He is serving this Organization from last 13 years"
                    },

                    {
                        id: 2,
                        name: "Muhammad Mehtab",
                        desc: "Muhammad Mehtab is the Finance Director and Member Board of Management of Sana Builders and Developers. He is serving this Organization from last 10 years"
                    },

                    {
                        id: 3,
                        name: "Fareed Uddin",
                        desc: "Fareed Uddin is the Marketing Manager and Head of Director of Sana Builders and Developers. He is serving this Organization from last 07 years"
                    }
                ]
    },
    footerData:{
        icons: [
            {
                id: 1,
                name: "facebook-new",
                linkto: "https://www.facebook.com/"
            },
            
            {
                id: 2,
                name: "instagram-new",
                linkto: "https://www.instagram.com/"
            },

        ]
    },

    Projects:{
        previousProjects: [
            {
                id: 1,
                name: "Sana Appartment",
                imgURL: "https://source.unsplash.com/200x200/?twin-tower,building",
                redirect: "https://sanabuilders.wordpress.com/"
            },

            {
                id: 2,
                name: "Sana Avenue",
                imgURL: "https://source.unsplash.com/200x200/?tower,building",
                redirect: "https://sanabuilders.wordpress.com/about/"
            },

            {
                id: 3,
                name: "Sana Villas",
                imgURL: "https://source.unsplash.com/200x200/?appartment,building",
                redirect: "https://sanabuilders.wordpress.com/vision/"

            },

            {
                id: 4,
                name: "Sana Cornor",
                imgURL: "https://source.unsplash.com/200x200/?villas,building",
                redirect: "https://sanabuilders.wordpress.com/mission/"

            },

            {
                id: 5,
                name: "Sana SUITE",
                imgURL: "https://source.unsplash.com/200x200/?suite,building",
                redirect: "https://sanabuilders.wordpress.com/contact/"
            },

            {
                id: 6,
                name: "Sana Garden",
                imgURL: "https://source.unsplash.com/200x200/?garden,building",
                redirect: "https://sanabuilders.wordpress.com/about/"
            },
        ],

        currentProjects: [
            {
                id: 1,
                name: "Sana Icon",
                imgURL: "https://source.unsplash.com/200x200/?Icon,building",
                redirect: "https://sanabuilders.wordpress.com/"
            },

            {
                id: 2,
                name: "Sana Square",
                imgURL: "https://source.unsplash.com/200x200/?Square,building",
                redirect: "https://sanabuilders.wordpress.com/about/"
            },

            {
                id: 3,
                name: "Sana Comfort",
                imgURL: "https://source.unsplash.com/200x200/?Comfort,building",
                redirect: "https://sanabuilders.wordpress.com/vision/"

            },

            {
                id: 4,
                name: "Sana Prime",
                imgURL: "https://source.unsplash.com/200x200/?Prime,building",
                redirect: "https://sanabuilders.wordpress.com/mission/"

            },

            {
                id: 5,
                name: "Sana Palace",
                imgURL: "https://source.unsplash.com/200x200/?Palace,building",
                redirect: "https://sanabuilders.wordpress.com/mission/"

            },
        ]
    }
 }  


 const reducer = (state=iState,action) =>{


    return state;

 }


 export default reducer;