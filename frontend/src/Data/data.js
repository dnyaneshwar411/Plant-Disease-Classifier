const diseases = [
  {
    disease: "Early_blight",
    description: "Early blight, caused by the fungus Alternaria solani, is a common fungal disease affecting tomato and potato plants.It typically appears as dark, concentric rings on lower leaves, eventually spreading to upper foliage.Thriving in warm, humid conditions, it often arises during periods of high moisture and moderate temperatures.",
    cures: [
      {
        solution: "Crop Rotation",
        desc: "Rotate tomato and potato crops with non-host plants to disrupt the disease cycle and reduce pathogen buildup in the soil."
      },
      {
        solution: "Sanitation",
        desc: "Remove and destroy infected plant debris to prevent the spread of fungal spores to healthy plants."
      },
      {
        solution: "Proper Plant Spacing",
        desc: "Provide adequate spacing between plants to promote air circulation and reduce humidity, creating less favorable conditions for fungal growth."
      },
      {
        solution: "Mulching",
        desc: "Apply organic mulch around plants to prevent soil splashing and minimize contact between leaves and soil-borne pathogens."
      },
      {
        solution: "Water Management",
        desc: "Water plants at the base to keep foliage dry and minimize leaf wetness, as early blight thrives in moist conditions."
      }
    ]
  }
]

export function retrieveDisease(disease) {
  for (const item of diseases) {
    if (item.disease === disease) return item
  }
}