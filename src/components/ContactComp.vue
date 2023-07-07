<template>
  <div>
    <div class="container p-0 text-center my-5">
      <form action="https://formspree.io/f/xeqbjwbz" method="POST">
        <div class="my-4">
          <div class="fw-bold">Your Name</div>
          <input
            type="name"
            class="p-4 w-75 text-center border-5 rounded-4 fs-5"
            placeholder="Please enter your name..."
            name="name"
            minlength="3"
            maxlength="20"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Name 🤓')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="my-4">
          <div class="fw-bold">Your Surname</div>
          <input
            type="surname"
            class="p-4 w-75 text-center border-5 rounded-4 fs-5"
            placeholder="Please enter your surname..."
            name="surname"
            minlength="3"
            maxlength="50"
            pattern="[A-Za-z]+"
            required
            oninvalid="this.setCustomValidity('Please Enter your Surname🤠')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="my-4">
          <div class="fw-bold">Your Email</div>
          <input
            type="email"
            class="p-4 w-75 text-center border-5 rounded-4 fs-5"
            placeholder="Please enter your email..."
            name="email"
            minlength="3"
            maxlength="20"
            required
            oninvalid="this.setCustomValidity('Enter An Email Address 🫡')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="my-4">
          <div class="fw-bold">Your Message</div>
          <div>
            <textarea
              class="p-3 w-75 text-center border-5 rounded-4 fs-5"
              placeholder="Please enter a message..."
              name="message"
              minlength="3"
              maxlength="500"
              required
              oninvalid="this.setCustomValidity('Please type a message to me 😎')"
              oninput="this.setCustomValidity('')"
            ></textarea>
          </div>
        </div>
        <button style="width: 74%" class="btn btn-outline-light" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
