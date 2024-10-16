//import Footer from "../components/Footer"; // Assuming Home.jsx is in src/pages/
import Card from "../components/Card"; // Similarly for Card
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="flex relative flex-col mt-1 w-full min-h-[520px] max-md:max-w-full">
      <img src="https://www.y4d.ngo/admin/uploads/banner/Website_Coverpage.jpg" alt="Background image for About Us section" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col justify-center items-start px-20 py-44 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-start mb-0 max-w-full w-[509px] max-md:mb-2.5">
        </div>
      </div>
    </section>
  );
};


const TestimonialSection = () => {
  return (
        <div>

          <main className="bg-gray-50 min-h-screen">
            <div className="container mx-auto py-12">
              <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
                Testimonials
              </h1>
              <p className="text-lg text-gray-700 text-center mb-6">
                We are proud to work on a variety of projects that aim to make a lasting impact in our
                community. Hear from our Students:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card 
                  title="Getting a Job"
                  description=" I am very thankful for this opportunity it helped me build my profile and get a Job in a prestigious Institute."
                  image="https://th.bing.com/th/id/OIP.qvNnBrWtLWPf91svL2ieYwAAAA?rs=1&pid=ImgDetMain" 
                />
                <Card 
                  title="Educate myself"
                  description="Y4D has transformed my life. I have learned so much and gained so many skills!."
                  image="https://th.bing.com/th/id/R.7d4904e8554333ab3abe02b5dc61a816?rik=yaO5Voq8IGCUWw&riu=http%3a%2f%2fwww.studentworldonline.com%2fuserfiles%2fimages%2fscholarships+-+indian+tata.jpg&ehk=nFR0NyD7NIzCFJgxmnsTnvfRAv2SAwTHfxVo%2bbaS%2b3E%3d&risl=&pid=ImgRaw&r=0" 
                />
                <Card 
                  title="Go beyond the boundaries"
                  description=" The programs offered by Y4D are amazing. Highly recommend!"
                  image="https://img.freepik.com/premium-photo/indian-young-female-doctor-isolated-green_856987-1115.jpg" 
                />
              </div>
            </div>
          </main>
        </div>
      );
    };

const SuccessSection = () => {
  return (
    <section className="flex flex-wrap justify-between self-end mt-2 ml-14 max-w-full w-[1075px] max-md:mt-10 max-md:ml-2.5">
      <div className="flex flex-col items-start my-auto p-5 w-[60%] max-md:w-full text-black">
        <h3 className="text-2xl leading-snug">Success Stories</h3>
        <p className="self-stretch mt-5 text-base font-light leading-relaxed">
          Records and Stories from our most recent years of operation. These partnerships go beyond mere cooperation; they focus on achieving shared goals, driving meaningful impact, and fostering sustainability. Here are some key insights:
        </p>
      </div>
      <div className="flex flex-col w-[40%] max-md:w-full">
        <img src="https://static.wixstatic.com/media/89a08e_90bc450d11b84b8fbdaabb19dcf17450~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/89a08e_90bc450d11b84b8fbdaabb19dcf17450~mv2.jpg" alt="Financial report illustration" className="object-contain w-full aspect-[1.36] ml-auto max-md:mt-10 max-md:max-w-full" />
      </div>
    </section>
  );
};

function Counter() {
  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      <CountUp start={0} end={701320} duration={3} separator="," />
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function Counter1({start,end}) {
  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      <CountUp start={start} end={end} duration={6} separator="," />
    </div>
  );
}
const DataGraphic = () => {
  return (
    <center><div className="flex justify: center w-[40%] max-md:w-full align-items:center">
    <div style={{ backgroundColor: '#D9EAD3', padding: '20px', borderRadius: '10px' }}>
      {/* <div style={{ fontSize: '48px', fontWeight: 'bold' }}>701320+</div> */}
      <Counter/>
      <div style={{ fontSize: '24px' }}>BENEFICIARY REACH</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px',  marginLeft: '40px' }}>
        <div style={{ textAlign: 'center' }}>
        <div className="flex flex-col w-[40%] max-md:w-full">
          <img src="https://static.vecteezy.com/system/resources/previews/009/591/915/original/location-pin-icon-free-png.png" alt="Projects Icon" />
          <Counter1 start={0} end={200}/>+People Helped</div>
        </div>
        <div style={{ textAlign: 'center'}}>
        <div className="flex flex-col w-[40%] max-md:w-full ">
          <img src="https://static.vecteezy.com/system/resources/previews/009/591/915/original/location-pin-icon-free-png.png" alt="Projects Icon" />
          <Counter1 start={0} end={140}/>+PROJECTS</div>
        </div>
      </div>
    </div></div></center>
  );
};





const Homepage = () => {
  return (
    <div className="flex flex-col bg-white">
      <main>
        <Hero />
        <SuccessSection />
        <DataGraphic />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default Homepage;


