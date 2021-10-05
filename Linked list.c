#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node*next;
};
struct node*head=0;
 
int main()

{
    int choice;
    struct node*temp;
    do{
        struct node*newnode;
        newnode= (struct node*)malloc(sizeof(struct node));
        printf("entere the data");
        scanf("%d",&newnode->data);
        newnode->next=0;
        if(head==0)
        {
            head = temp = newnode;
        
        }
        else
        {
            temp->next=newnode;//address of second node
            
            temp=newnode;
        }
        printf("Press 1 to continue or anything else to exit: ");
        scanf("%d",&choice);    
        }while(choice==1);   
    temp=head;
   do
    {
        printf("%d", temp->data);
        temp=temp->next;
    } while(temp->next!=0);
    
    return 0;
}