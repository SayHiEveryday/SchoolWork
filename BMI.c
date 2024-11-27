#include <stdio.h>

int main() {
	char name[20];
	float weight,height,BMI;
	printf("****************************************************\n\n");
	printf("              BODY MASS INDEX PROGRAM\n\n");
	printf("****************************************************\n\n");
	printf("Please enter your name	     : ");
	scanf("%s", name);
	printf("Please enter your weight (Kg): ");
	scanf("%f", &weight);
	printf("Please enter your height (M) : ");
	scanf("%f", &height);
	printf("****************************************************\n\n");
	BMI = weight / (height * height);
	printf("HI!! %s You have BMI of %.2f\n\n", name, BMI);
	if (20 <= BMI && BMI <= 25) { // between 20 - 25
		printf("Normal BMI\n\n");
		printf("You are healthy.\n\n");
	} else {
		printf("Dangerous BMI\n\n");
		printf("Losing or Gaining weight may improve your health.\n\n");
	}
	printf("****************************************************\n\n");
	printf("	By piyaphum nuchniyom 3/3 35\n\n");
	printf("****************************************************\n\n");
}
