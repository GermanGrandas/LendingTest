# Lending Front Technical Test

## Application Design

The application is a single page application, it was structured from a Layout layer where the global styles of the page are.  
A component which represents the main window, within it has two more components, the component of the list of products and the component with the Investors view, finally a component with the facility to edit the information of an investor. 

## Calls to the Backend

There are 3 main calls to the backend:  
    - *get_products_by_id* brings all products given a user id  
    - *get_investors_by_id* brings all investors given a user id and a product id  
    - *edit_investor* edits the information of an investor   

The routes used to obtain the data should be of type _post_, except for the route to modify the investor information, which should be _put_.  

## Expected Data from API 
The *get_products_by_id* route should receive the current user information and return the information related to a product, such as: _product_id_, _date_, _amount_ and _status_

The *get_investors_by_id* route should receive the current user information and the current product_id selected return the information related to a product, such as: _id_, _investor_name_, _sold_, _purchased_,_left_amount_ and _remaining_

The *edit_investor* route should receive the information of the investor to be edited 




