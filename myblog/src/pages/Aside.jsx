import React from 'react';
import styled from 'styled-components';


const Sidebar = styled.div`
    flex: 3;
    margin: 20px;
    padding-bottom: 30px;
    background: #fdfdfd;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SidebarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SidebarTitle = styled.span`
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    font-variant: small-caps;
`;
const Img = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: bottom;
    margin-top: 15px;
`;
const Pr = styled.p`
    font-size: 14px;
    padding: 10px 0 30px;
`;
const SidebarList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`;
const SidebarListItem = styled.li`
    width: 50%;
    padding-left: 35px;
    line-height: 35px;
    font-weight: 600;
    cursor: pointer;
    text-transform: capitalize;
`;
const TagList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 30px;
    padding-left: 30px;
`;
const TagListItem = styled.li`
    font-size: 13px;
    color: #666;
    cursor: pointer;
    margin-right:10px;
    &::before{
        content:"#";
    }
    &:hover{
        color: red;
    }
`;

const Aside = () => {
    return (
        <Sidebar>
            <SidebarItem>
                <SidebarTitle>About Me</SidebarTitle>
                <Img src="images/me.jpg" alt="about" />
                <Pr>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Pr>
            </SidebarItem>
            <SidebarItem>
                <SidebarTitle>Categories</SidebarTitle>
                <SidebarList>
                    <SidebarListItem> Gipson </SidebarListItem>
                    <SidebarListItem> Fender </SidebarListItem>
                    <SidebarListItem> Epiphone </SidebarListItem>
                    <SidebarListItem> Moollon </SidebarListItem>
                    <SidebarListItem> Martin </SidebarListItem>
                    <SidebarListItem> Craft </SidebarListItem>
                    <SidebarListItem> Taylor </SidebarListItem>
                    <SidebarListItem> Yamaha </SidebarListItem>
                </SidebarList>
            </SidebarItem>
            <SidebarItem>
                <SidebarTitle>Tag</SidebarTitle>
                <TagList>
                    <TagListItem> StratoCaster </TagListItem>
                    <TagListItem> TeleCaster </TagListItem>
                    <TagListItem> Hollowbody </TagListItem>
                    <TagListItem> Semi-Hollowbody </TagListItem>
                    <TagListItem> LesPaul </TagListItem>
                    <TagListItem> Accustic </TagListItem>
                    <TagListItem> Amplifier </TagListItem>
                    <TagListItem> Effecter </TagListItem>
                </TagList>
            </SidebarItem>
            
        </Sidebar>
    );
};

export default Aside;