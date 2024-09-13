// HTML
// <input id="userInput" type="text" placeholder="Enter your query here">
// <button onclick="sendQuery()">Send</button>
// <p id="responseText"></p>
var res=""
async function sendQuery() {
  const inputElement = document.getElementById('userInput');
  const responseElement = document.getElementById('outputText');

  const query = inputElement.value;
  const url = 'https://canvasai.ltimindtree.com/chatservice/chat';

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmdVdXcndULWRia28xZ2JwbmFFWkU2V2d1RjJ4RERGSHAyMlYzdUV6UDA4In0.eyJleHAiOjE3MjQ5MzAzNTUsImlhdCI6MTcyNDkyODg1NSwiYXV0aF90aW1lIjoxNzI0OTI0NDczLCJqdGkiOiJhMzVjN2UyMC1mYWVkLTQ2ODAtYmEyOC1lNzY2MTQ0ZDYwN2YiLCJpc3MiOiJodHRwczovL2NhbnZhc2FpLmx0aW1pbmR0cmVlLmNvbS9rZXljbG9hay9yZWFsbXMvY2FudmFzYWkiLCJhdWQiOlsiYnJva2VyIiwiYWNjb3VudCJdLCJzdWIiOiJjNmQ2NDEyNi0yOGVjLTQ3ZDQtODk5My1mNmEzNzBiODc4YmMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjYW52YXNhaS1jb250cm9scGxhbmUtdWkiLCJub25jZSI6ImQ3ZTQzZWE0LTkzMzktNDU4Yi04M2QxLTYwZjU0MmMwOTc3NSIsInNlc3Npb25fc3RhdGUiOiI2NGM1MTE2My0xMzY5LTQ5NTQtYTgwOC1iZjcyYTUyZmM2YjIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vY2FudmFzYWkubHRpbWluZHRyZWUuY29tL3N0dWRpbyIsIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtY2FudmFzYWkiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYnJva2VyIjp7InJvbGVzIjpbInJlYWQtdG9rZW4iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIEdyb3VwU2NvcGUgcHJvZmlsZSIsInNpZCI6IjY0YzUxMTYzLTEzNjktNDk1NC1hODA4LWJmNzJhNTJmYzZiMiIsInVwbiI6IjgwMmQ4M2EwLTg4ZGMtNGZlYS1iYjAyLTYyYTA3M2RjNjVlMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiWWFzaCBLYWx5YW4iLCJncm91cHMiOlsiZGVmYXVsdC1yb2xlcy1jYW52YXNhaSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiODAyZDgzYTAtODhkYy00ZmVhLWJiMDItNjJhMDczZGM2NWUwIiwiZ2l2ZW5fbmFtZSI6Illhc2giLCJmYW1pbHlfbmFtZSI6IkthbHlhbiIsImVtYWlsIjoieWFzaC5rYWx5YW5AbHRpbWluZHRyZWUuY29tIn0.aNY-IyseSMUqvFIBYMhzq3lVEJdqv8PhCDqPLvJvTOU1oXZHUcO4Msp_gf7UOWakQwBshzw4drAc2_ZwDPLJP0w7rkWlyXhit3O6vOamwIFYL80AgsYp1S5UgtDW-h2gSY_Rq0uDlrObsrwBcwEU3e7yc6JZu--XnrKhZT0E9u9Kl_2307dP0gbrQIw12kPnVU4WzGjD9NWmjaZay0kLV8RWBhMW8ERahtWfYSGxd4lxSnNF0JN9pJHshUBoOYG8AcPnRj3gy3unc0OT9cATRfbC3t3_e7VqDMG6hkLNXhQWFyET75ezpKxTiK6LzWd-k3ntUDQZ0am87Vc7kYTaCQ");
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "hint": "Give only sql query, no other sentence",
    "query": query,
    "space_name": "EngToSql",
    "userId": "802d83a0-88dc-4fea-bb02-62a073dc65e0"
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
fetch("https://canvasai.ltimindtree.com/chatservice/chat", requestOptions)
.then((response) => response.json())
.then((result) => res =result.response)
.catch((error) => console.error(error));
res = res.replace("assistant", "").trim();
responseElement.innerText=res;
}

