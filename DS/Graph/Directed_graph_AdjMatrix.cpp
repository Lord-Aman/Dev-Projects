#include <iostream>
using namespace std;

#define n 5 // graph of 5 nodes/vertices

void init(int adjMatrix[][n]){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            adjMatrix[i][j] = 0;
        }
    }
}

void addEdge(int adjMatrix[][n],int src,int dest){
    adjMatrix[src][dest] = 1;
}

void print(int adjMatrix[][n]){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            cout << adjMatrix[i][j] << " ";
        }
        cout << endl;
    }
}

bool hasEdge(int adjMatrix[][n],int src,int dest){
    if(adjMatrix[src][dest] == 1)
        return true;
    
    return false;
}

void removeEdge(int adjMatrix[][n],int src,int dest){
    adjMatrix[src][dest] = 0;
}

int main(){
    int adjMatrix[n][n]; // n * n Matrix

    init(adjMatrix); //Initializing the Matrix with Zeroes

    addEdge(adjMatrix,0,1);
    addEdge(adjMatrix,0,2);
    addEdge(adjMatrix,0,3);
    addEdge(adjMatrix,1,3);
    addEdge(adjMatrix,1,4);
    addEdge(adjMatrix,2,3);
    addEdge(adjMatrix,3,4);

    print(adjMatrix);
    return 0;
}