import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function NewsFeed() {
  return (
      <div>
      <div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/CatFood.jpg"></Card.Img>
        <Card.Body>
          <Card.Title>Nature's Feast Cat approved</Card.Title>
          <Card.Text>
          Dr. Marty Nature’s Feast is a premium, freeze-dried raw cat food that provides everything your adult cat 
          needs for a stronger, healthier life.This cat food formula is 100% natural and contains feline-friendly 
          fruits, veggies, and mixed proteins to support energy, good digestion, and smooth skin (and a shinier coat!). 
          Nature’s Feast cat food contains ZERO harmful fillers and no “bad” veggies that are harmful to cats.
           All of our ingredients are sourced fresh and then gently frozen so they’re overflowing with flavor and nutrients.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="/DogFood1.jpg"></Card.Img>
        <Card.Body>
          <Card.Title>Purina Pro Plan High Protein Shredded Blend Chicken & Rice Formula with Probiotics Dry Dog Food    
          </Card.Title>
          <Card.Text>
          Hard kibble combined with tender, shredded pieces for taste and texture dogs love. High protein formula,
           with real chicken as the first ingredient. Fortified with guaranteed live probiotics for digestive and immune 
           health. Used to be known as SAVOR Shredded Blend Chicken and Rice Formula.Vitamin A and omega-6 fatty 
           acids to nourish skin and coat.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="/DogFood.jpg"></Card.Img>
        <Card.Body>
          <Card.Title>Pedigree Chopped Meaty Ground Dinner With Hearty Chicken Wet Dog Food</Card.Title>
          <Card.Text>
          Made in the USA with top-quality ingredients. Contains both beef and chicken flavors for variety. 
          Gourmet cuts in irresistible gravy create su-paw taste that dogs love. Complete and balanced wet food for dogs 
          of all ages. Feed as a complete meal or serve as a topper for your best friend’s kibble.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/FishFood.jpg"></Card.Img>
        <Card.Body>
          <Card.Title>Aqueon Fish Betta Color Food, 0.95 Ounces</Card.Title>
          <Card.Text>
          Aqueon Betta Food is a unique dietary product that will keep you Betta healthy and happy. 
          The Aqueon Betta Food is meant for daily feeding and is small to help prevent overfeeding. 
          The pellets are made of shrimp apart from other fortifying ingredients that are sure to be loved by all bettas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/FishFood1.jpg"></Card.Img>
        <Card.Body>
          <Card.Title>Freeze Dried Betta Treat Blood Worms 0.11 Ounces</Card.Title>
          <Card.Text>
          Excellent high-protein treat for all bettas Full-bodied, authentic blood worms Rich in vitamins 
          and minerals As nutritious as live food without the risk of bacteria or parasites.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>

        <Card.Img variant="top" src="/TurtleFood.jpeg"></Card.Img>
        <Card.Body>
          <Card.Title>Tetra ReptoMin Floating Food Sticks, 1.94 Ounces</Card.Title>
          <Card.Text>
          Protein-rich floating pellets fortified with vitamins for proper turtle nutrition Fortified with calcium 
          and vitamin C Promotes strong shell and skeletal development Readily accepted by a variety of aquatic turtle species.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  
     <div>

     </div>


    </div>
  );
}

export default NewsFeed;