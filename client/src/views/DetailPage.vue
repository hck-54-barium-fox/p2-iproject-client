<script>
export default {};
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="grid grid-cols-3 gap-5 rounded-lg overflow-hidden">
      <div class="col-span-3">
        <div class="flex flex-col gap-3">
          <span class="font-semibold text-2xl">Detail Recipe</span>
          <div class="flex rounded-lg overflow-hidden border border-primaryColor">
            <div class="w-1/3 border-r">
              <div class="relative">
                <img
                  src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_150.jpg"
                  alt="example-image"
                  class="object-cover w-full"
                />
                <span
                  class="absolute bottom-0 left-0 bg-white m-3 font-semibold px-3 py-1 text-xs rounded-lg"
                  >1 Servings</span
                >
                <div
                  class="bg-white p-3 absolute rounded-lg bottom-[-15px] right-3 border"
                >
                  <img
                    src="@/assets/icons/bookmark.svg"
                    alt="example-icon"
                    class="w-[15px] h-auto"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-3 px-3 py-5">
                <span class="text-xl font-semibold">Emeril's Pizza</span>
                <ul class="flex flex-col text-xs gap-1">
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>1 tb Yeast</div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>1 c Warm water (110 degrees)</div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>1/4 c Olive oil</div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>4 c Flour</div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>2 ts Salt</div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>1 lb New potatoes, thinly sliced,; blanched</div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>
                      1 c Julienned red onions|2 tb Extra virgin olive oil
                    </div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>
                      Salt and white pepper|1/2 c Grated Parmigiano-Reggiano
                      cheese
                    </div>
                  </li>
                  <li class="flex gap-2">
                    <div>📌</div>
                    <div>Drizzle of truffle oil|2 tb Chopped chives</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex w-2/3 flex-col px-3 py-5">
              <div class="flex flex-col gap-3 justify-between">
                <span class="font-semibold text-lg"
                  >🤌 Nutrition of Yeast
                </span>
                <ul class="flex flex-col gap-1 text-xs text-semibold">
                  <li class="flex gap-2 border-b py-1">
                    <div>Calories :</div>
                    <div>12.9</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Serving Size (g) :</div>
                    <div>4.0</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Fat Total (g) :</div>
                    <div>0.3</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Fat Saturated (g) :</div>
                    <div>0.0</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Protein (g) :</div>
                    <div>1.6</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Sodium (mg) :</div>
                    <div>2</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Potassium (mg) :</div>
                    <div>25</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Cholesterol (mg) :</div>
                    <div>0</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Carbohydrates Total (g) :</div>
                    <div>1.7</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Fiber (g) :</div>
                    <div>1.1</div>
                  </li>
                  <li class="flex gap-2 border-b py-1">
                    <div>Sugar (g) :</div>
                    <div>0.0</div>
                  </li>
                </ul>
              </div>
              <div class="pb-5"></div>
              <div class="flex flex-col gap-5 justify-between">
                <div class="flex flex-col gap-3">
                  <div class="font-semibold text-lg">👨‍🍳 How to make :</div>
                  <span class="text-sm"
                    >"Preheat the oven 400 degrees. In an electric mixer, whisk
                    the yeast, water, and oil, together, to form a paste. Using
                    a dough hook, add the flour and salt to the paste, mix the
                    dough until the dough comes away from the sides and crawls
                    up the sides of the hook. Remove the dough from the bowl and
                    turn the dough into a greased bowl, cover. Let the dough
                    rise until double in size, about 1 hour. Turn the dough out
                    onto a floured surface and divide into 4 (4-ounce) balls,
                    cover. Let the dough rest for 10-15 minutes. Press each
                    dough out into a 10-inch circle about 1/2 -1-inch thick.
                    Lightly brush the dough with olive oil. Divide the potatoes
                    into four portions and season with salt and pepper. Cover
                    the each dough with the potatoes, leaving a 1-inch border.
                    In a small mixing bowl, toss the red onions with the extra
                    virgin olive oil. Season with salt and pepper. Place a layer
                    of the red onions on top of the potatoes. Sprinkle each
                    pizza with the grated cheese. Drizzle each pizza with the
                    truffle oil. Bake for 15-20 minutes or until the crust is
                    crispy and golden brown. Garnish the pizza with
                    chives."</span
                  >
                </div>
                <div class="flex justify-end">
                  <button class="text-sm px-10 py-3 font-semibold rounded-lg bg-primaryColor">
                    Buy sample
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1"></div>
    </div>
  </div>
</template>
