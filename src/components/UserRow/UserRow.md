Search
```js
() => {
    const exampleUser = {
        name:{
            title:'Mademoiselle',
            first:'Aline',
            last:'Leclercq'
        },
        location:{
            street:{
                number:2420,
                name:'Rue de L\'Abbaye'
            },
            city:'Gondiswil',
            state:'Thurgau',
            country:'Switzerland',
            postcode:1903,
            coordinates:{
                latitude:-73.4311,
                longitude:76.9385
            },
            timezone:{
                offset:'-3:30',
                description:'Newfoundland'
            }
        },
        email:'aline.leclercq@example.com',
        login:{
            uuid:'08c5385b-c843-4f8b-9a34-afe334133e9b',
            username:'crazyostrich963',
            password:'celeste',
            salt:'Gqm7GQMN',
            md5:'dd0d6885ce7169eb0c41137cadb4f85f',
            sha1:'c1017d5ddbb052a5b9d4b85f85bef941227c5c13',
            sha256:'1f550e95458e9b591c4f9a848df77c776c18b78ac995bf36a4ea05a642deff3b'
        },
        phone:'075 286 78 48',
        cell:'078 482 40 87',
        picture:{
            large:'https://randomuser.me/api/portraits/women/19.jpg',
            medium:'https://randomuser.me/api/portraits/med/women/19.jpg',
            thumbnail:'https://randomuser.me/api/portraits/thumb/women/19.jpg'
        },
        nat:'CH'
    }
    console.log(exampleUser)

    return <UserRow user={exampleUser} />
}
```
