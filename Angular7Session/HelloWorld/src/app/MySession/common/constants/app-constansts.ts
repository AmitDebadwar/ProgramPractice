

export enum UserApiUrls{
    getAllUsers = "https://jsonplaceholder.typicode.com/users",
    getUser = "",
}

export class AppConstansts {
 
    static getRouterConfig() {
        return [

            {
                title: "Home",
                active: true,
                target: "some",
                url: "/",
                id: "1"
            },
            {
                title: "Sessions",
                active: false,
                url: "/#",
                target: "/3",
                id: "2",
                child: [
                    {
                        title: "Fundamentals",
                        isHeader: true
                    },
                    {
                        title: "Interpolation and Two Way Data Binding",
                        active: false,
                        url: "/interpolationand2waydatabinding",
                        target: "/",
                        id: ""

                    },
                    {
                        title: "Pipe",
                        isHeader: true
                    },
                    {
                        title: "Inbuilt & Custom Pipes",
                        active: false,
                        url: "/pipe-demo",
                        target: "/",
                        id: ""
                     },
                     {
                        title: "Forms",
                        isHeader: true
                     },
                     {
                        title: "Template Driven Forms",
                        active: false,
                        url: "/template-driven-form",
                        target: "/",
                        id: ""
                     },
                     {
                        title: "Consuming HTTP Services",
                        isHeader: true
                     },
                     {
                        title: "GET and POST",
                        active: false,
                        url: "/app-posts",
                        target: "/",
                        id: ""
                     },
                     {
                        title: "Custom Directives",
                        isHeader: true
                     },
                     {
                        title: "Format Number Custom Directive",
                        active: false,
                        url: "/app-custom-directives",
                        target: "/",
                        id: ""
                     }



                ]
            },
            {
                title: "Selenium",
                active: false,
                target: "/",
                url: "/app-smoke-test-config-file-generator",
                id: "786"
            } 
        ];
    }

    
    
}
