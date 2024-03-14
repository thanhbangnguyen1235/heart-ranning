html,body{
    height:100%
  }
  
  .bg_heart {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden
   }
  
  .heart {
      position: absolute;
      top: -50%;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -m-transform: rotate(-45deg);
      transform: rotate(-45deg)
   }
  
  .heart:before {
      position: absolute;
      top: -50%;
      left: 0;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: 100%;
  }
  
  .heart:after {
      position: absolute;
      top: 0;
      right: -50%;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: 100%;
  }
  
  @-webkit-keyframes love {
    0%{top:110%}
  }
  @-moz-keyframes love {
    0%{top:110%}
  }
  @-ms-keyframes love {
    0%{top:110%}
  }
  @keyframes love {
    0%{top:110%}
  }