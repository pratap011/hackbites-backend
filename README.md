# hackbites-backend
The backend code for HackBites

default URL = http://localhost:4000
Please consider that all the routes start with the default url

# User authentication routes(POST)

The user authentication routes are as follows-

## Register - /auth/register
 Parameters required for body - { name,age,email,passsword}
 
 ## Login - /auth/login
  Parameters required for body - {email,password}
  
  ## User info - /details
    Parameters required for body - {height, weight, days since pregnant}
    Please pass the email of the user as a query string parameter for this route 
    
    

## Checking inventory - /inventory/getlist
 No parameters required. It's a GET request
