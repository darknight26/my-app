import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-bSwgydMjCHkxTHXKbKBgbWqX",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//const form = $("form");

/*
const API_KEY= "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"

const prompt = `Hi, please fill out the form:\n ${form.toString()}`;

async function fetchData(){
  const response = await fetch("https://api.openai.com/v1/chat/completions",{
  method : "POST",
  headers: {
    Authorization: `Bearer ${API_KEY}` ,
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    model:"gpt-3.5-turbo-0301",
    prompt,
    max_tokens:7
  })
})
  const data = await response.json()
  console.log(data)
}

fetchData(); 

*/





