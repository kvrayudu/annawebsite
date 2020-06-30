import React from "react"
import "../styles/writing.css"
import "../styles/full.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default props => (

    <div>
    <Row> 
    <Col>
    <div id="writingSection">
        <h1 className="writingSectionHead">Writing</h1>
        <p className="selectedSentence">Below, view some selected works of mine. Please reach out if you'd like to see a full print and web portfolio.</p><br />
        <div>
            {/* <h1 className="selectedHead">Selected</h1> */}
            <div className="selectedArticleDiv">
                <h1 className="writingSectionSubHead">Race</h1>
                <a className="articleLink" href="https://time.com/5858649/racism-coronavirus/" target="_blank" >Cover Story: 'I Will Not Stand Silent.' Asian Americans Reflect on Racism During the Pandemic | TIME</a><br />
                <a className="articleLink" href="https://time.com/5851111/protests-looting/" target="_blank" >How American Power Dynamics Have Shaped Perceptions of Looting | TIME</a><br />
                <a className="articleLink" href="https://www.thejuggernaut.com/skin-whitening-industry" target="_blank" > How Skin Whitening Became a $23 Billion Industry | The Juggernaut</a><br />
                <a className="articleLink" href="https://time.com/5837805/asian-american-history/" target="_blank" >These Activists Coined the Term 'Asian American'—And Shaped Decades of Advocacy | TIME</a><br />
                <a className="articleLink" href="https://time.com/5827768/maitreyi-ramakrishnan-never-have-i-ever/" target="_blank" >'I Wish I Had a Show Like This Growing Up.' An Interview with Maitreyi Ramakrishnan | TIME</a><br />
                <a className="articleLink" href="https://time.com/5800209/asian-american-census/" target="_blank" >Who 'Counts' as Asian? Here's How the Answer Got So Complicated | TIME</a><br />
                <a className="articleLink" href="https://time.com/5680759/justin-trudeau-brownface-photo/" target="_blank" >Exclusive: Justin Trudeau Wore Brownface at 2001 ‘Arabian Nights’ Party | TIME </a><br />

                <br /><h1 className="writingSectionSubHead">Art</h1>
                <a className="articleLink" href="https://time.com/5851312/pandemic-art-galleries/" target="_blank" >Who Said a Gallery Needs Four Walls and a Ceiling? | TIME</a><br />
                <a className="articleLink" href="https://time.com/5827561/1918-flu-art/" target="_blank" >How Art Movements Tried to Make Sense of the World in the Wake of the 1918 Flu | TIME</a><br />
                <a className="articleLink" href="https://time.com/5799566/bernie-sanders-arts/" target="_blank" >'No Healthcare, No Security.' Why Thousands of Artists Are Supporting Bernie Sanders | TIME </a><br />
                <a className="articleLink" href="https://time.com/5786068/whitney-museum-mexican-muralists/" target="_blank" >How Mexican Muralists Changed the Course of 20th-Century American Art | TIME </a><br />

                <br /><h1 className="writingSectionSubHead">Other</h1>
                <a className="articleLink" href="https://time.com/5814028/abortion-clinics-during-coronavirus/" target="_blank" >No Test, Minimal Contact: How One Abortion Clinic Is Adapting to Coronavirus Concerns | TIME</a><br />
                <a className="articleLink" href="https://time.com/5730790/banana-panama-disease/" target="_blank" >What We Can Learn From the Near-Death of the Banana | TIME </a><br />
                <a className="articleLink" href="https://time.com/5667447/tennis-clothes-history/" target="_blank" >The Surprising—and Sometimes Troubling—History of Tennis Clothes | TIME</a><br />
                <a className="articleLink" href="https://time.com/5645347/quentin-tarantino-women-dialogue/" target="_blank" >How Often Do Women Talk in Quentin Tarantino Films? | TIME</a><br />
                <a className="articleLink" href="https://time.com/5642621/jojo-bows-history/" target="_blank" >From Marie Antoinette to JoJo Siwa, Hair Bows Have a Surprisingly Meaningful History | TIME</a><br />
            </div>
            <br />
            <a className="authorPageLink" href="https://time.com/author/anna-purna-kambhampaty/" target="_blank" >TIME Author Page</a><br />
            <a className="authorPageLink" href="https://www.thejuggernaut.com/author/anna-purna-kambhampaty" target="_blank" >Juggernaut Author Page</a>

        </div>

        {/* <h3>
            <a className="allArticlesLink" href="https://time.com/author/anna-purna-kambhampaty/" target="_blank" >All TIME articles</a>
        </h3> */}

    </div>
    </Col>
    </Row>
    </div>
)
 