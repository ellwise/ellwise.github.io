import { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class CV extends Component {

    render() {
        const markdown = `
#### __Elliott Wise__

__Email__: [ell.wise@gmail.com](mailto:ell.wise@gmail.com)  
__GitHub__: [github.com/ellwise](https://github.com/ellwise)  
__Website__: [ellwise.com](https://ellwise.com)

##### Education

__PhD, Numerical Analysis__, University College London (2018)  
__BEng (Hons), Mechatronics__, Australian National University (2012)  
__BSc, Mathematics__, Australian National University (2012)

* Expert in __applied mathematics__, __high-performance computing/simulation__, __acoustics__.
* Studies also included __computer science__, __environmental science__, __electronics__.
* Focus was on __scientific and industrial modelling__.
* Dean's Prize: Scholarship (£88,000), Faculty of Engineering, University College London.
* Summer Research Scholarship (AU$4,000), Math. Sci. Inst., Australian National University.

##### Experience

__Senior Consultant__, Amey Strategic Consulting (2019-Present)

* Amey Strategic Consulting specialises in __data science__ for __asset management__ and __infrastructure engineering__ projects.
* I work as a __data science consultant__ and __software developer__.
* Projects/clients have included:
    * __Kent County Council__: Development of a web-app to help manage road operations (__React Bootstrap + Plotly + PostgreSQL__). My focus is on identifying and communicating road accident risk to planners, and developing a __causal machine learning model__ of this risk to help direct interventions.
    * __Ofgem__: __Development of regulatory policy__ to ensure energy network companies plan asset maintenance/improvements to minimise monetised risk to consumers. This involved extensive data analysis, workshopping, development a scenario exploration tool (__Plotly Dash__), __quality-assurance checks__ on, and subsequent refactor of the pipeline for setting risk-targets (__VBA + Power Query__).
    * __Network Rail__: Development of a dashboard for improved train delay quantification and allocation/communication of responsibility to station managers (__Power BI + PostgreSQL__). This involved development of an analytics pipeline and database.
    * __New York Metropolitan Transportation Authority__: Development of a web-app to facilitate data-driven asset investment decisions (__Power BI + SQL__). I was the __lead developer__, and my analytics work focussed on elevator and escalator investment prioritisation.
    * __Ferrovial Centre of Excellence for Asset Management__: Development of a web-app to simulate the effect of new EU regulation on recycling contracts (__R-Shiny__).

__Research Associate__, Imperial College London (2018-2019)

* Mathematician within the Non-Destructive Evaluation group, which develops __ultrasonic measurement__ techniques for detecting flaws in mechanical components.
* Development of __ultrasonic imaging algorithms__ for pipe inspections (corrosion in difficult-to-inspect locations). This included software development in __Matlab__, and the design of deep learning algorithms for image processing (a __convolutional autoencoder__ built with __Pytorch__).
* Simulation of __metamaterials__, a hypothesised mechanism for sound damping in moth wings that is thought to aid them in avoiding predation by echolocating bats (joint work with the Mathematics department).

__PhD Researcher__, University College London (2014-2018)

* I was a member of the Biomedical Ultrasound Group, which develops new __ultrasonic therapies__ (e.g. __cancer ablation__, __neuro-stimulation__) and associated modelling and simulation tools. I also collaborated with computer science researchers at Brno University of Technology.
* I contributed to the development of the [_k_-Wave](http://www.k-wave.org/) __Matlab__ toolbox for medical ultrasound simulation. This has over __10,000 registered users__ and more than __700 citations__.
* My research included four projects, which tackled different aspects of the computational efficiency of the mathematics (__Fourier collocation__) underlying the toolbox's acoustic model.
* I authored __7 journal papers__ and __2 conference papers__ based on work conducted here.

__Mathematician__, Commonwealth Scientific & Industrial Research Organisation (2013-2014)

* This is Australia's national science agency, whose chief role is to improve the economic and social performance of Australian industry.
* My role was within Mathematics, Statistics, and Informatics, primarily applying modelling and numerical simulations to __materials science__ problems, including:
    * Designing a polymer filter to bind and capture proteins for use as an antimicrobial agent. This innvolved __molecular dynamics__ and __metadynamics__ simulations (__NAMD__, __LAAMPS__).
    * Improving the lifespan of ion thrusters (a form of __spacecraft propulsion__) though careful choice of materials. This was informed by simulations of sputtering.
    * Modelling transverse deformation in __carbon fibres__ to develop a methodology for characterising their elastic properties. This involved __finite-element modelling (COMSOL)__.
* I also conducted one project in collaboration with a gender studies scholar: Investigating changes to the content of [AfterEllen](https://www.afterellen.com/) (a queer pop-culture news site) before and after its acquisition by MTV. This involved __web-scraping__ and __topic modelling__.

__Consultant__, Eggler Consulting Engineers (2010-2012)

* Eggler Consulting Engineers provides __systems engineering__ management for military vehicle projects, as well as related __teaching services__ to both industry and academia.
* Worked as a consultant to __Rheinmetall MAN Military Vehicles__ on a response to a Defence tender for a fleet of modular logistics vehicles.
* __Prepared teaching material__ on vehicle design for the Australian Defence Force Academy.
* Administrated and created website content on military vehicle history.

##### Skills/Tools

Software, computing

* __Languages__: Python, Javascript, SQL, Cypher, Julia, Matlab, R
* __Web-app development__: React-Bootstrap, Flask, Plotly Dash, R-Shiny
* __Deployment__: AWS e.g. EC2, or serverless via Chalice/Lambda
* __Version control, issue tracking__: Git, GitHub/GitLab
* __Microsoft enterprise tools__: Power BI, Power Apps, Power Query/M, DAX

Data science, mathematics

* __Libraries__: Pandas, Plotly, scikit-learn, Pytorch, Kedro, Causalnex, networkx, BeautifulSoup, D3
* __Classical machine learning__: Classification (Random Forests, LightGBM, Naive Bayes, Causal Bayesian Networks), clustering (DBSCAN), NLP (topic modelling via LDA)
* __Deep learning__: Convolutional autoencoders, TabNet (attention, encoding categorical variables)
* __Databases__: PostgreSQL, PostGIS, Neo4j
* __Applied mathematics__: Numerical methods for differential equations, optimal transport

Communication

* __Can present work clearly__ in a variety of contexts, including client meetings, departmental seminars, and international conferences.
* __High-quality writing__, as evidenced in industry by successful bid-writing, and in academia by numerous peer-reviewed journal papers and my PhD thesis.
* __Can confidently and convincingly construct arguments__, as I've demonstrated over seven years defending my contributions to scientific research within the academic community.
* __Effectively teach complex material__ to graduate and undergraduate students
    * Teaching assistant at University College London (lab technique, coursework evaluation).
    * Head Engineering tutor at John XXIII residential hall, Australian National University.
    * Prepared course materials for the Australian Defence Force Academy.
    * Demonstrated ultrasound imaging to aspiring scientists at open days.
`
        return <ReactMarkdown>{markdown}</ReactMarkdown>
    }
}

export default CV;