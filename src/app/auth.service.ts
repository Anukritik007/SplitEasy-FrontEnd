
export class AuthService{

    public isloggedIn=false;

    public isAuthenticated(){
        //creating a dummy promise to mock authentication response from server in 800ms
        const promise = new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.isloggedIn);
                },800);
            }
        );
        return promise;
    }

    public login(){
        this.isloggedIn=true;
    }

    public logout(){
        this.isloggedIn=false;

    }
}