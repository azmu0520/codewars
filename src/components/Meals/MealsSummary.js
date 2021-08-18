import styled from 'styled-components';

const MealsSummary = () => {
  return (
    <Section>
      <Wrap>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolorem, quod doloribus aliquid voluptatem possimus consequuntur
          molestias voluptate autem eius?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolorem, quod doloribus aliquid voluptatem possimus consequuntur
          molestias voluptate autem eius?
        </p>
      </Wrap>
    </Section>
  );
};

export default MealsSummary;

const Section = styled.section`
  background: red;
  width: 700px;
  display: flex;
  align-items: center;
  margin-left: 32%;
  background: #46474a;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  h2 {
    font-size: 28px;
    font-weight: bolder;
  }
  p {
    font-size: 18px;
  }
`;

const Wrap = styled.div`
  text-align: center;
`;
