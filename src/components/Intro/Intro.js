import React, { Component } from 'react';
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react';
import { FlexBox } from '../reusuable/styles';

const IntroContainer = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 40px;
    width: 620px;
    height: 420px;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.3);//그림자 추가
    .me{
        width: 90%;
        height: 250px;
    }
    .job{
        color: #aaa;
        font-size: 18px;
        letter-spacing: 1.5px;
    }
    .name{
        font-size: 24px;
        font-weight: bold;
        margin-top: 5px;
        border-bottom: 0.5px solid black;//밑줄
        padding-bottom: 10px;
        width: 90%;
    }
    .label{
        font-weight: bold;
        text-align: right;
    }
`;

const IconsBox = styled.div`
    position: absolute;
    bottom: 0;
    height: 70px;
    background-color: #555;
    width: 100%;
    padding: 20px 0;
    .myicon{
        cursor: pointer;
        transition: 0.5s; //임팩트 나오는데 0.5초 걸린다.
    }
    .github:hover{
        color: #000 !important;
    }
    .book:hover{
        color: #0ff !important;
    }
    .question:hover{
        color: #ff0 !important;
    }
`;

class Intro extends Component{
    render(){
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-4" style={{ padding: "25px"}}>
                            <img alt=""/>
                        </div>
                        <div className="flex-6" style={{ paddingTop: "30px"}}>
                            <div className="job">University 4th Student</div>
                            <div className="name">임민수(Lim Min Su)</div>
                            <br/>
                            <FlexBox>
                                <div className="flex-2 label">School</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">서원대학교</div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "7px"}}>
                                <div className="flex-2 label">학과</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">컴퓨터공학과</div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "7px"}}>
                                <div className="flex-2 label">email</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">godmlzkf1@naver.com</div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "7px"}}>
                                <div className="flex-2 label">GPA</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">3.81 / 4.5</div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <IconsBox>
                        <FlexBox>
                            <div className="flex-1"/>
                            <div className="flex-1">
                                <a href="https://github.com/lms0806">
                                    <Icon className="myicon github" name="github" size="big" style={{ color: "white"}}/>
                                </a>
                            </div>
                            <div className="flex-1">
                                <a href="https://www.acmicpc.net/user/lms0806">
                                <Icon className="myicon book" name="book" size="big" style={{ color: "white"}}/>
                                </a>
                            </div>
                            <div className="flex-1">
                                <a href="https://solved.ac/profile/lms0806">
                                <Icon className="myicon book" name="book" size="big" style={{ color: "white"}}/>
                                </a>
                            </div>
                            <div className="flex-1">
                            <a href="">
                                <Icon className="myicon question" name="question" size="big" style={{ color: "white"}}/>
                                </a>
                            </div>
                            <div className="flex-1"/>
                        </FlexBox>
                    </IconsBox>
                </IntroContainer>
            </div>
        );
    }
}

export default Intro;