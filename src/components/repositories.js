import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './../styles/repositories.css';
import People from './people';
class Repositories extends Component {
  render() {
    return (        
      <div>
      
        <div class="container-lg p-responsive js-pinned-items-reorder-container clearfix">
      <signup-prompt class="signup-prompt-bg rounded-1" data-prompt="signup">
    <div class="signup-prompt p-4 text-center mb-4 rounded-1">
      <div class="position-relative">
        <button type="button" class="position-absolute top-0 right-0 btn-link link-gray" data-action="click:signup-prompt#dismiss" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
          Dismiss
        </button>
        <h3 class="pt-2">Grow your team on GitHub</h3>
        <p class="col-8 mx-auto">GitHub is home to over 50 million developers working together. Join them to grow your own development teams, manage permissions, and collaborate on projects.</p>
        <a class="btn btn-primary">Sign up</a>
      </div>
    </div>
  </signup-prompt>

        <ol class="d-flex flex-wrap list-style-none gutter-condensed mb-4 js-pinned-items-reorder-list">
      
<li class="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-content-stretch">
  <div class="Box d-flex js-pinned-item-list-item p-3 pinned-item-list-item public sortable-button-item source width-full">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        
          <span class="repo" title="javascript">&#128215;javascript</span>
        
      </div>


      <p class="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
        JavaScript Style Guide
      </p>

      <p class="mb-0 f6 text-gray">
  <span itemprop="programmingLanguage"><span class="dot"/>JavaScript</span>


          <a href="/airbnb/javascript/stargazers" class="pinned-item-meta muted-link ">
            
            97.8k
          </a>
          <a href="/airbnb/javascript/network/members" class="pinned-item-meta muted-link ">
            
            19k
          </a>
      </p>
    </div>
  </div>
</li>


      
<li class="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-content-stretch">
  <div class="Box pinned-item-list-item d-flex p-3 width-full js-pinned-item-list-item public source  sortable-button-item">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
          <span class="repo" title="react-dates">&#128215;react-dates</span>
        
      </div>


      <p class="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
        An easily internationalizable, mobile-friendly datepicker library for the web
      </p>

      <p class="mb-0 f6 text-gray">
  <span itemprop="programmingLanguage">JavaScript</span>


          <a href="/airbnb/react-dates/stargazers" class="pinned-item-meta muted-link ">
           
            10.7k
          </a>
          <a href="/airbnb/react-dates/network/members" class="pinned-item-meta muted-link ">
           
            1.5k
          </a>
      </p>
    </div>
  </div>
</li>


      
<li class="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-content-stretch">
  <div class="Box pinned-item-list-item d-flex p-3 width-full js-pinned-item-list-item public source  sortable-button-item">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
          <span class="repo" title="lottie-android">&#128215;lottie-android</span>
        
      </div>


      <p class="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
        Render After Effects animations natively on Android and iOS, Web, and React Native
      </p>

      <p class="mb-0 f6 text-gray">
          
  <span itemprop="programmingLanguage">Java</span>


          <a href="/airbnb/lottie-android/stargazers" class="pinned-item-meta muted-link ">
            
            29.2k
          </a>
          <a href="/airbnb/lottie-android/network/members" class="pinned-item-meta muted-link ">
            4.7k
          </a>
      </p>
    </div>
  </div>
</li>


      
<li class="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-content-stretch">
  <div class="Box pinned-item-list-item d-flex p-3 width-full js-pinned-item-list-item public source  sortable-button-item">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
       
          <span class="repo" title="lottie-ios">&#128215;lottie-ios</span>
        
      </div>


      <p class="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
        An iOS library to natively render After Effects vector animations
      </p>

      <p class="mb-0 f6 text-gray">
          
  <span itemprop="programmingLanguage">Swift</span>


          <a href="/airbnb/lottie-ios/stargazers" class="pinned-item-meta muted-link ">
            
            19.9k
          </a>
          <a href="/airbnb/lottie-ios/network/members" class="pinned-item-meta muted-link ">
            
            2.8k
          </a>
      </p>
    </div>
  </div>
</li>


      
<li class="col-12 col-md-6 col-lg-4 mb-3 d-flex flex-content-stretch">
  <div class="Box pinned-item-list-item d-flex p-3 width-full js-pinned-item-list-item public source  sortable-button-item">
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        
        
          <span class="repo" title="react-sketchapp">&#128215;react-sketchapp</span>
        
      </div>


      <p class="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
        render React components to Sketch 
      </p>

      <p class="mb-0 f6 text-gray">
          
  <span itemprop="programmingLanguage">TypeScript</span>


          <a href="/airbnb/react-sketchapp/stargazers" class="pinned-item-meta muted-link ">
            
            14.5k
          </a>
          <a href="/airbnb/react-sketchapp/network/members" class="pinned-item-meta muted-link ">
            
            832
          </a>
      </p>
    </div>
  </div>
</li>


</ol>
</div>
  </div>
    )
  }
}

export default Repositories;
