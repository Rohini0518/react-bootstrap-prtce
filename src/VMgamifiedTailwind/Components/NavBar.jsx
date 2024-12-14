import vmLogo from "../../assets/images/vm-training-logo.png";

export default function NavBar(){
    return(
        <div className="flex justify-between items-center sm:flex-wrap">
            <img src={vmLogo} className=""/>
            <div className="hidden sm:flex gap-4  mt-2">
                <p>Home</p>
                <p>Trainings</p>
                <p>Courses</p>
                <p>Events</p>
                <p>About</p>
            </div>
            <input type="text" className="border p-2" placeholder="Search.."/> 
        </div>
    )
}