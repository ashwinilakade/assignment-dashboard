import React from 'react';
import {useState} from 'react';
import {AiOutlineFileSearch, AiOutlineDollarCircle} from 'react-icons/ai';
import {VscNewFolder, VscFileSubmodule} from 'react-icons/vsc';
import {TbFolderSearch} from 'react-icons/tb';
import {FaNetworkWired} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="main">
      <div class="col-md-4 mt-4">
        <div className="panel-container">
          <ul class="list-group">
            <li className="list-group-item grid gap-6">
              <AiOutlineFileSearch className="icons" />{' '}
              <span>CONFLICT SEARCH</span>
            </li>
            <li className="list-group-item grid gap-6">
              <VscNewFolder className="icons" />
              <span>CREATE NEW MATTER</span>
            </li>
            <li class="list-group-item">
              <TbFolderSearch className="icons" />

              <span>QUICK/ADVANCE SEARCH</span>
            </li>
            <li class="list-group-item">
              <FaNetworkWired className="icons" />
              <span>WORK STATION</span>
            </li>
            <li class="list-group-item">
              <VscFileSubmodule className="icons" />
              <span>RECENT FILES</span>
            </li>
            <li class="list-group-item">
              <AiOutlineDollarCircle className="icons" />
              <span>BILLING</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-4">
        <div className="row-container ">
          <b>2</b>
          <small>Total Closings</small>
          <hr></hr>
        </div>
        <div className="row-container secound-modal"></div>
      </div>
      <div className="col-md-4">
        <div className="row-custom"></div>
      </div>
    </div>
  );
}
