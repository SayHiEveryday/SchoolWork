#include <stdio.h>

int main() {

    int from, to;

    printf("Enter multiple from:\t");
    scanf("%d", &from);

    printf("Enter multiple to:\t");
    scanf("%d", &to);

    for (int i = 1; i <= 12; i++) {
        for (int j = from; j <= to; j++) {
            printf("%d x %d = %d\t",j,i,i*j);
        }
        printf("\n");
    }

    printf("****************************************************\n\n");
	printf("	By piyaphum nuchniyom 3/3 35\n\n");
	printf("****************************************************\n\n");
}