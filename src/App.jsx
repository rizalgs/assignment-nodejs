import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='home'>
        <h1 className='lorem'>
          RIZAL GANDA<span className='home-color'> SETIAWAN</span>
        </h1>
        <p className='home-text lorem'>+628226979821 <span className='home-color'>DevOps</span></p>
        <p>Skilled DevOps Engineer with 3+ years of hands-on experience supporting, automating, and optimizing mission critical deployments in Kubernetes, leveraging configuration management, CI/CD, and DevOps processes.</p>
        <div style={{marginTop:"30px"}}>
          <a href="https://linkedin.com/">
          <img src="/linkedin.png" alt="" style={{width:"30px", marginRight:"15px"}} />
          </a>
          <a href="https://github.com/">
          <img src="/github.png" alt="" style={{width:"30px"}} />
          </a>
        </div>
      
      </div>
      <div className='experience'>
        <h1 className='experience-text'>EXPERIENCE</h1>
        <div className='exp-tanggal'>
        <h2>Technical Support Engginer</h2>
        <p className='home-color'>6 Juni 2016 - 1 Juni 2017</p>
        </div>
        <p className='experience-comment exp-color'>PT Padi Internet</p>
        <p className='experience-text exp-color'>
          <ul>
          <li>Collaborating with the IT department on the deployment and maintenance of network technologies.</li>
          <li>Testing the exchange of data between computers, servers, modems, and routers.</li>
          <li>Installing, configuring, and updating network software, as well as maintaining hardware and network devices.</li>
          <li>Performing diagnostic tests and repairs, as well as developing data archiving, backup, and retrieval procedures.</li>
          </ul>
        </p>
        <div className='exp-tanggal'>
        <h2>System Administrator</h2>
        <p className='home-color'>1 July 2017 - 31 Desember 2017</p>
        </div>
        <p className='experience-comment exp-color'>PT Indosat Tbk</p>
        <p className='experience-text exp-color'>
          <ul>
          <li>Install and configure software and hardware</li>
          <li>Monitor performance and maintain systems according to requirements</li>
          <li>Troubleshoot issues and outages</li>
          <li>Ensure security through access controls, backups and firewalls</li>
          </ul>
        </p>
        <div className='exp-tanggal'>
        <h2>Quality Assurance Tester</h2>
        <p className='home-color'>1 January 2018 - 01 July 2018</p>
        </div>
        <p className='experience-comment exp-color'>PT Indosat Tbk</p>
        <p className='experience-text  exp-color'>
          <ul>
          <li>Documenting and reporting product or service quality levels</li>
          <li>Developing and implementing standards for inspection</li>
          <li>Developing a workflow for product inspection</li>

          </ul>
        </p>
        <div className='exp-tanggal'>
        <h2>System Administrator</h2>
        <p className='home-color'>10 November 2019 - Present</p>
        </div>
        <p className='experience-comment exp-color'>PT Myindo Cyber Media</p>
        <p className='exp-color'>
          <ul>
        <li>Wrote Ansible manifests and modules to deploy, configure, and manage servers</li>
        <li>Automated build and deployment using Jenkins to reduce human error and speed up production processes</li>
        <li>Reduced deployment time for critical agile project infrastructure from ~1 month to 2 days</li>
        <li>Installed and configured Kubernetes Cluster and Docker Container</li>
        </ul>
        </p>
      </div>
      
      <div className='education'>
        <h1 className='edu-text'> EDUCATION</h1>
        <div className='border-right'>
        <h2>SMK NEGERI 7 SEMARANG</h2>
        <p className='edu-color experience-comment'>COMPUTER AND ENGINERING</p>
        <p className='edu-color edu-text'>2014-2017</p>
        </div>
        <div className='border-right'>
        <h2>INDRAPRASTA UNIVERSITY</h2>
        <p className='edu-color experience-comment'>INFORMATICS TECHNOLOGY</p>
        <p className='edu-color'>2020-PRESENT</p>
        </div>
      </div>

      <div className='skills'>
        <h1 className='skills-text'>SKILLS</h1>
        <h3 className=' skills-color experience-comment'>Programing Languange TOOLS</h3>
        <div className='flex-container border-right'>
          <div className='flex-container-left'>
          <div className='flex'>
          <img className='flex-img' src="/centang.jpg" alt="" />
          <p>Docker</p>
          </div>
          <div className='flex'>
            <img className='flex-img' src="/centang.jpg" alt="" />
            <p>Kubernetes</p>
          </div>
          <div className='flex'>
            <img className='flex-img' src="/centang.jpg" alt="" />
            <p>Linux/Unix</p>
          </div>
          <div className='flex'>
            <img className='flex-img' src="/centang.jpg" alt="" />
            <p>Jenkins</p>
          </div>
          </div>
          <div className='flex-container-right'>
          <div className='flex'>
          <img className='flex-img' src="/centang.jpg" alt="" />
          <p>Html 5</p>
          </div>
          <div className='flex'>
            <img className='flex-img' src="/centang.jpg" alt="" />
            <p>NodeJS</p>
          </div>
          <div className='flex'>
            <img className='flex-img' src="/centang.jpg" alt="" />
            <p>Ansible</p>
          </div>
          <div className='flex'>
            <img className='flex-img' src="/centang.jpg" alt="" />
            <p>RDBMS dan DBMS</p>
          </div>
          </div>          
     
        </div>
      </div>

      <div className="interest">
        <h1 className='interest-text'>
          INTERESTS
        </h1>
        <div style={{marginTop:"30px"}}>
          <center><img src="/hobi.png" alt="" style={{width:"400px", marginRight:"100px"}} /></center>
        </div>
        <p className='interest-text interest-color'>

        <b>Hobbies & Interests</b>
        <br/>
        <ul>
        <li>Blogging about food: including recipes, cooking, and food photography</li>
        <li>Martial Arts: have been to participate to fighting championship</li>
        <li>Running: both participation and running half marathon</li>
        </ul>
        

        </p>
      </div>


      <div className='awards'>
        <h1 className='awards-text'>AWARDS & CERTIFICATIONS</h1>
        <div className='flex'>
          <img className='flex-img' src="/winner.jpg" alt="" />
          <p>Champion LKS SMK Jateng 2015</p>
        </div>
        <div className='flex'>
          <img className='flex-img' src="/winner.jpg" alt="" />
          <p>Winner Networking Competition Undip</p>
        </div>
        <div className='flex'>
          <img className='flex-img' src="/winner.jpg" alt="" />
          <p>Gold Medal Pencak Silat Open Pelajar Tanding Kelas 65kg</p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
