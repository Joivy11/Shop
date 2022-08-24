import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategotyItem from './CategotyItem';


const Container = styled.div`
    width:100%;
    position: relative;
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategotyItem item={item}/>
            ))}
        </Container>
    )
}

export default Categories
