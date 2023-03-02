let requiredData= [
                             {
                             id:1,
                             name:'Ravi',
                             createdAt:'1234567'
                             },
                            {
                            id:2,
                            name:'Rahul',
                            createdAt:'1022547'
                                 }
                 ]

let oldaoo =[ [
    {
        "id": 3,
        "attributes": {
            "name": "Admin3",
            "createdAt": "2023-03-02T13:53:36.507Z",
            "updatedAt": "2023-03-02T13:53:41.092Z",
            "publishedAt": "2023-03-02T13:53:41.090Z"
        }
    },
    {
        "id": 5,
        "attributes": {
            "name": "Ravi",
            "createdAt": "2023-03-02T14:05:44.381Z",
            "updatedAt": "2023-03-02T14:05:44.381Z",
            "publishedAt": "2023-03-02T14:05:44.374Z"
        }
    },
    {
        "id": 6,
        "attributes": {
            "name": "Rahul",
            "createdAt": "2023-03-02T14:06:26.720Z",
            "updatedAt": "2023-03-02T14:06:26.720Z",
            "publishedAt": "2023-03-02T14:06:26.718Z"
        }
    },
    {
        "id": 7,
        "attributes": {
            "name": "Ram",
            "createdAt": "2023-03-02T14:07:00.251Z",
            "updatedAt": "2023-03-02T14:07:00.251Z",
            "publishedAt": "2023-03-02T14:07:00.250Z"
        }
    }
]
    
   ];
   console.log('befor map function ->',oldaoo);

let newoldaoo = oldaoo.map((cv,idx,arr)=>{
    return  {
               id:cv.id,
               name:cv.attributes.name,
               createdAt:cv.attributes.createdAt,
            }
});  
console.log('after map function ->',newoldaoo);