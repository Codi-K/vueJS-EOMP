<template>
  <div>
    <div class="container p-0 text-center my-5">
      <form action="https://formspree.io/f/xeqbjwbz" method="POST">
        <div class="my-4">
          <div class="fw-bold">Your Name</div>
          <input
            type="name"
            class="p-4 w-75 text-center border border-black border-5 rounded-4 fs-5"
            placeholder="Please enter your name..."
            name="name"
          />
        </div>
        <div class="my-4">
          <div class="fw-bold">Your Surname</div>
          <input
            type="surname"
            class="p-4 w-75 text-center border border-black border-5 rounded-4 fs-5"
            placeholder="Please enter your surname..."
            name="surname"
          />
        </div>
        <div class="my-4">
          <div class="fw-bold">Your Email</div>
          <input
            type="email"
            class="p-4 w-75 text-center border border-black border-5 rounded-4 fs-5"
            placeholder="Please enter your email..."
            name="email"
          />
        </div>
        <div class="my-4">
          <div class="fw-bold">Your Message</div>
          <div>
            <textarea
              class="p-3 w-75 text-center border border-black border-5 rounded-4 fs-5"
              placeholder="Please enter a message..."
              name="message"
            ></textarea>
          </div>
        </div>
          <button style="width: 74%" class="btn btn-outline-light " type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
