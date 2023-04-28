# ajaikumar.nataraj\_\_web_project

RISHI Market I made a website for farmers to sell their products with profitable amount. Nowadays more farmers don't get the valuable price for their agricultural products. I give the valuable price for their products.
Problem Statement:https://docs.google.com/document/d/1JbZsN9xp5PA2HaMulxFAQO-5TjcxVdi6usd2rgGsP5c/edit
Market Research:https://docs.google.com/document/d/1xiBJQXavYewImtFTtYipX6VEFBitoKeNkCtbQ7iLhV8/edit
User Flow:https://drive.google.com/drive/folders/1sjlE22PvCJrWwvK4X6nLd-ImfY-3i6_4
Wire Frame:https://drive.google.com/drive/folders/1t0aGf2JX3ZECWNzi2KCNpNYoXFcbtkx2
Sonar Cloud:https://sonarcloud.io/project/overview?id=fssa-batch3_ajaikumar.nataraj__web_project

Features:

1. User CRUD (Buyer & Seller & Admin & Worker) (completed)

2. Farmer Story
   -> Add Farming Products (Completed)
   -> Farming Products details (Completed)
   -> Update Farming Products (Completed)
   -> Close or Deactive the Farming Products data (Completed)

3. Buyer story
   -> Create Buy Products (Completed)
   -> Read Buyer lists (Add cart) (Completed)
   -> Update (Change)  (yet to complete)
   -> Delete the order (Completed)

4. Admin Page
   -> Create the details (user and product) (Completed)
   -> Read the details (user and product) (completed)
   -> Update the availability of products, transportation details, etc,... (Completed)
   -> Delete the product customer details. (Completed)
   
5. Comment crud
   -> Create the comment (Completed)
   -> Read the comment (Completed)
   -> Update the comment (Completed)
   -> Delete the comment (Completed)
   
   
6. Leader Board
   -> Create the Leader Board (Completed)
   -> Read the Leader Board (Completed)
   -> Update the Leader Board (Completed)
   -> Delete the Leader Board (Completed)
   
7. Worker Crud
   -> Create the products (Completed)
   -> Read the products (Completed)
   -> Update the products (Completed)
   -> Delete the products (Completed)
   
   RISHI AGRI MARKET EATABLES BUYING(Customer) AND SELLING(Farmer)   
      BUYER    
      Create an account    
         Scenario 1: Successfully create an account   
             Steps:   
                Navigate to the registration page.   
                Enter the required information such as name, email, and password.   
                Click the "Sign Up" button.   
             Expected Result:   
                The Details are saved.   
                The user is redirected to the home page.   
                
                
      Login an account    
         Scenario 1: Successfully login in to account   
            Steps:       
                Navigate to the login page.        
                Enter the required information such as email, and password.       
                Click the "login" button.       
            Expected Result:    
                The user is redirected to the Product page.       
                If user wants to saw the profile click the avatar in the right top.       
                
                
      View product/item details     
        Scenario 1: Successfully view product/item details       
           Steps:        
                 Log in as a buyer.     
                 Navigate to the product listing page.                
                 Select a product/item to view its details.      
             Expected Result:       
                The user can view the details of the selected product/item.         
                
                
       Buy a product/item        
         Scenario 1: Successfully purchase a product/item      
            Steps:       
                Log in as a buyer.        
                Navigate to the product listing page.         
                Select a product/item to view its details.     
                Click the "Buy Now" button.        
                Confirm the shipping address and payment method.       
                Click the "Place Order" button.      
             Expected Result:        
                The user is redirected to the order confirmation page.    
                An order confirmation Bill is download or send to the user's email address or Phone Number.      
                The product/item's stock is reduced by the purchased quantity.       
                
                
       Add product/item to cart      
         Scenario 1: Successfully add product/item to cart         
            Steps:         
               Log in as a buyer.     
               Navigate to the product listing page.      
               Select a product/item to add to cart.        
               Click the "Add to Cart" button.         
            Expected Result:                                    
               The product/item is added to the user's cart.       
               
               
     View items in cart       
        Scenario 1: Successfully view items in cart     
            Steps:      
               Log in as a buyer.       
               Navigate to the cart page.         
               View the list of items in the cart.      
            Expected Result:      
               The user can view the list of items in the cart.      
               
               
     Remove item from cart           
         Scenario 1: Successfully remove item from cart       
            Steps:                 
               Log in as a buyer.            
               Navigate to the cart page.      
               Click the "Cancel" button.                
               Remove the selected item from the cart.        
            Expected Result:                                
               The item is removed from the user's cart.           
               
               
               
    SELLER                                                                       
      Create an account          
         Scenario 1: Successfully create an account         
            Steps:                                  
               Navigate to the registration page.           
               Enter the required information such as name, email, password, home address, land address, and farmer type.          
               Click the "Sign up" button.              
            Expected Result:                            
               The user is redirected to the login page.           
               
               
      View account details             
         Scenario 1: Successfully view account details       
            Steps:                 
               Log in as a seller.              
               Navigate to the profile page.                                              
               View the account details such as name, email, phone number, and address.     
            Expected Result:                     
               The user can view their details.     
               
               
      Edit account details                            
         Scenario 1: Successfully edit account details          
            Steps:                   
               Log in as a seller.              
               Navigate to the account page.          
               Click the "Edit" button.          
               Update the account details.         
               Click the "Submit" button.           
            Expected Result:                            
               The user's account details are updated.        
               
               
      Create a new product to sell                   
         Scenario 1: Successfully create a new product to sell       
            Steps:                    
               Log in as a seller.                
               Navigate to the product creation page.           
               Enter the product details such as name, price, description, type, pickup_date, image, and Qty.          
               Upload product images.         
               Click the "Add" button.           
            Expected Result:              
               The new product is created and added to the seller's list of products.           
               
               
     View list of products        
        Scenario 1: Successfully view list of products        
           Steps:         
               Log in as a seller.        
               Navigate to the products page.          
               View the list of products.          
           Expected Result:            
               The seller can view their list of products.         
               
               
    Edit product details            
       Scenario 1: Successfully edit product details           
           Steps:           
               Log in as a seller.        
               Navigate to the products page.              
               Select a product to edit.         
               Click the "Edit" button.            
               Update the product details.       
               Click the "Save" button.        
           Expected Result:            
               The product details are updated.            
               
               
   
    COMMENT                                                                       
      Create an comment         
         Scenario 1: Successfully create an account         
            Steps:                                  
               Navigate to the comment page.           
               Enter the required information such as feedback.          
               Click the "Submit" button.              
            Expected Result:                            
               The review is stored in the storage area.            
               
               
      Read comment             
         Scenario 1: Successfully view comment      
            Steps:                 
               Log in as a user.              
               Navigate to the comment page.                                              
               View your comment and also others comment.     
            Expected Result:                     
               The user can view their comment and also others comment.     
               
               
      Edit comment                           
         Scenario 1: Successfully edit comment          
            Steps:                   
               Log in as a user.              
               Navigate to the comment page.          
               Update the alternate comment.         
               Click the "Edit" symbol.          
            Expected Result:                            
               The user's comment's are updated.        
                   
               
               
     Delete comment                           
         Scenario 1: Successfully delete comment          
            Steps:                   
               Log in as a user.              
               Navigate to the comment page.          
               Delete the unwanted comment.         
               Click the "Delete" symbol.          
            Expected Result:                            
               The user's comment is deleted.   
               
     PRODUCT                                                                      
      Create a product          
         Scenario 1: Successfully create a product         
            Steps:                                  
               Navigate to the product registration page.           
               Enter the required information such as name, img, type, pickup address, price, and qty.          
               Click the "Add" button.
               After adding all your products
               Click the "Submit" button.              
            Expected Result:                            
               All added products are shown in upload's page.           
               
               
      View account details             
         Scenario 1: Successfully view product details       
            Steps:                 
               Log in as a buyer.              
               Navigate to the products card page.                                              
               View the different types of products.     
            Expected Result:                     
               The user can view the different types of products.     
               
               
      Edit product details                            
         Scenario 1: Successfully edit account details          
            Steps:                   
               Log in as a seller.              
               Navigate to the products history page.          
               Update the product details.         
               Click the "Edit" button.           
            Expected Result:                            
               The user's product details are updated.              
               
               
    Delete product details            
       Scenario 1: Successfully delete product details           
           Steps:           
               Log in as a seller.        
               Navigate to the products page.              
               Select a product to delete.               
               Click the "Delete" button.        
           Expected Result:            
               The product details are deleted.  
               
               
               
     ADMIN 
         Scenario 1: Go to New Upload page
            Steps: 
                  Login as a Admin
                  Navigate to the New Upload page.
                  See the New Upload details in the page.
            Expected Result:
                  New upload products are shown.
                  
          Scenario 2: Go to New Order page
            Steps: 
                  Login as a Admin
                  Navigate to the New Order page.
                  See the New Order details in the page.
            Expected Result:
                  New Order details are shown
                  
          Scenario 3: Go to Completed order page
            Steps: 
                  Login as a Admin
                  Navigate to the Completed order page.
                  See the New Completed order in the page.
            Expected Result:
                  Completed order products are shown


          Scenario 4: Go to Order Inprogress page
            Steps: 
                  Login as a Admin
                  Navigate to the Order Inprogress page.
                  See the New Order Inprogress in the page.
            Expected Result:
                  Order Inprogress products are shown
                  
                  
      WORKER
          Scenario 1: Go to New Upload page
            Steps: 
                  Login as a Worker
                  Navigate to the New Upload page.
                  See the New Upload details in the page.
            Expected Result:
                  New upload products are shown.
                  
          Scenario 2: Go to New Order page
            Steps: 
                  Login as a Worker
                  Navigate to the New Order page.
                  See the New Order details in the page.
            Expected Result:
                  New Order details are shown
                  
          Scenario 3: Go to Completed order page
            Steps: 
                  Login as a Worker
                  Navigate to the Completed order page.
                  See the New Completed order in the page.
            Expected Result:
                  Completed order products are shown


          Scenario 4: Go to Order Inprogress page
            Steps: 
                  Login as a Worker
                  Navigate to the Order Inprogress page.
                  See the New Order Inprogress in the page.
                  You are able to approve by clicking "Tick" symbol
                  You are able to delete by clicking "X" symbol
            Expected Result:
                  Order Inprogress products are shown
                  
                  
                  
    Leader Board
      Create a Leader Board         
         Scenario 1: Successfully create a Leader Board Points         
            Steps:
               Login as User
               Navigate to the  Leader Board  page.           
               Click the "Submit" button.              
            Expected Result:                            
               The review is stored in the storage area.            
               
               
      Read  Leader Board              
         Scenario 1: Successfully view  Leader Board       
            Steps:                 
               Log in as a user.              
               Navigate to the  Leader Board  page.                                              
               View your Buyer Leader Board  and also seller  Leader Board .     
            Expected Result:                     
               The user can view both  Leader Board Points.     
               
               
      Edit  Leader Board                            
         Scenario 1: Successfully edit  Leader Board           
            Steps:                   
               Log in as a user.              
               Navigate to the  Leader Board  page. 
               If buyer buy some products some points will add to their account.
               If seller sell some products some points will add to their account.
            Expected Result:                            
               The user's  Leader Board Point's are updated.        
                   
               
               
     Delete  Leader Board                            
         Scenario 1: Successfully delete Name from Leader Board.          
            Steps:                   
               Log in as a user.              
               Navigate to the Leader Board  page.          
               If user delete their account his/her name delete from the table.        
            Expected Result:                            
               The user's name from the Leader Board  is deleted.   
