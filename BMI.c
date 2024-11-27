#include <stdio.h>
#include <conio.h>

int main() {
	char name[20];
	float weight,height,BMI;
	printf("****************************************************\n\n");
	printf("              BODY MASS INDEX PROGRAM\n\n");
	printf("****************************************************\n\n");
	printf("Please enter your name		 : ");
	scanf("%s", name);
	printf("Please enter your weight (Kg): ");
	scanf("%f", &weight);
	printf("Please enter your height  (M): ");
	scanf("%f", &height);
	printf("****************************************************\n\n");
	BMI = weight + (height * height);
	printf("")
	if (20.0 <= BMI && BMI <= 25.0) {
		printf("Normal BMI");
	} else {
		printf("Dangerous BMI");
	}
}
