<form method="POST" action="{{ route('payment.process') }}">
    @csrf
    <label>المبلغ (ريال):</label>
    <input type="text" name="amount" value="10.00" required>
    <button type="submit">ادفع الآن</button>
</form>
