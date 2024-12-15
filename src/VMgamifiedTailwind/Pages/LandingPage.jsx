import Card from "../Components/Card";
import NavBar from "../Components/NavBar";

export default function LandingPage(){
    const cardList = [
        {
          src: "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?ga=GA1.1.53114067.1731520625&semt=ais_hybrid",
          id: 1,
          heading: "Live Training",
          text: "Level up your skills with real-world problems",
          label: "Explore Live Training"
        },
        {
          src: "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?ga=GA1.1.53114067.1731520625&semt=ais_hybrid",
          id: 2,
          heading: "On-Demand Courses",
          text: "Learn at your own pace with expert-crafted courses",
          label: "Browse Courses"
        },
        {
          src: "https://img.freepik.com/free-vector/online-lecturing-distance-learning-opportunities-self-education-internet-courses-e-learning-technologies_335657-3279.jpg?ga=GA1.1.53114067.1731520625&semt=ais_hybrid",
          id: 3,
          heading: "Certifications",
          text: "Showcase your expertise with industry-recognized credentials",
          label: "Earn Certifications"
        }
      ];
    return(
        <div>
            <NavBar/>
            {cardList.map((item)=>(<Card key={item.id} {...item}/>))}
        </div>
    )
}