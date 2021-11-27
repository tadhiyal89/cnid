import React from 'react';
import { mount } from '../../../../config/enzyme';
import Landing from '../index';
import axios from "axios";

let wrapper;
function renderMount() {
  const searchText = '';
  const pageIndex = '1';
  const totalRecords = 0;
  const newsData = [];
  const hasMore = true;
  React.useState = jest.fn()
  .mockReturnValueOnce([searchText, jest.fn((searchText)=>searchText)])
  .mockReturnValueOnce([pageIndex, jest.fn((pageIndex)=>pageIndex)])
  .mockReturnValueOnce([totalRecords, jest.fn((totalRecords)=>totalRecords)])
  .mockReturnValueOnce([newsData, jest.fn((newsData)=>newsData)])
  .mockReturnValueOnce([hasMore, jest.fn((hasMore)=>hasMore)])
  wrapper = mount(<Landing />);
}

const mockResponse ={
  "status": true,
  "data": {
    "status": "ok",
    "totalResults": 8890,
    "articles": [
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Cameron Faulkner",
        "title": "The PS5 is back in stock at Best Buy right now",
        "description": "Looking for a PS5? The elusive console has popped up in stock at Best Buy. Head there to get one while they last starting for $399, then purchase some games and accessories to go with it.",
        "url": "https://www.theverge.com/good-deals/2021/5/6/22423327/ps5-restocks-best-buy-sony-playstation-5",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/LMouIs94a_3di90t-e-tzCtN__s=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22015304/vpavic_4278_20201030_0247.jpg",
        "publishedAt": "2021-05-06T19:51:10Z",
        "content": "The console is back in stock, likely for a limited time\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto by Vjeran Pavic / The Verge\r\nThis st… [+1805 chars]"
      }
    ]
  },
  "message": "SuccessfullY find the datas"
}

describe('Landing Page', () => {
  jest.mock("axios");
  axios.get = jest.fn(()=>Promise.reject());

   renderMount();
   expect(axios.get).toHaveBeenCalledTimes(1);
  it('#1: Snapshot testing', () => {
    axios.get.mockResolvedValue({data:mockResponse});
    renderMount();
    expect(wrapper).toMatchSnapshot();
  });
  it('#2: Default input should be empty', () => {
    expect(wrapper.find("input").instance().value).toBe("");
  });
  it('#3: Change in input value and call api for data', () => {
    axios.get.mockResolvedValue({data:mockResponse});
    renderMount();
    const input = wrapper.find("input");
    input.simulate('change', { target: { value: 'Technology' } });
    expect(input.instance().value).toBe("Technology");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
